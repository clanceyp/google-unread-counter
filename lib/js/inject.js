//@ sourceURL=inject.js
chrome.extension.sendMessage({action:"get-settings"}, function(response) {
    var backgroundOptions = response;
    try {
        if (backgroundOptions.options.guc.settings.consoleLog) {
            console.log("GUC: backgroundOptions", backgroundOptions);
        }
    } catch (e){}
    var settings = backgroundOptions.options.settings,
        favicon,
        guc = {
            isInbox: location.hostname.indexOf("inbox") !== -1,
            convertImgToBase64URL: function(url, callback){
                var img = new Image();
                img.crossOrigin = 'Anonymous';
                img.onload = function(){
                    var canvas = document.createElement('CANVAS'),
                    ctx = canvas.getContext('2d'), dataURL;
                    canvas.height = this.height;
                    canvas.width = this.width;
                    ctx.drawImage(this, 0, 0);
                    dataURL = canvas.toDataURL();
                    callback(dataURL);
                    canvas = null;
                };
                img.onerror = function(){
                    callback(null);
                };
                img.src = url;
            },
            char: backgroundOptions.options.guc.char,
            selectors: backgroundOptions.options.guc.selectors,
            previousValue:null,
            timer:null,
            settings: backgroundOptions.options.guc.settings ,
            getCountRe: new RegExp('(\\d+)'),
            log: function(){
                if (guc.settings.consoleLog){
                    console.log(arguments);
                }
            },
            getAppName: function(){
                var appName = guc.isInbox ? "inbox" : "gmail";
                return appName;
            },
            getColorIcon: function(status, type){
                return settings.colors[guc.getAppName()][status][type];
            },
            getUnreadCount: function(){
                var count,
                    label,
                    title,
                    el,
                    result,
                    selectorMail = guc.selectors.mail || "a[aria-label^='Inbox'][aria-label$='unread']",
                    selectorInbox = guc.selectors.inbox || ".qG";
                clearTimeout(guc.timer);
                if (!guc.settings.useDOM){
                    // ignore and skip to end
                } else if (guc.isInbox){
                    count = document.querySelectorAll(selectorInbox).length;
                } else {// its mail
                    el = document.querySelector(selectorMail);
                    title = el ? el.getAttribute("title") : "";
                    label = el ? el.getAttribute("aria-label") : "";
                    if (title || label){ // when trying to get the count from aria label e.g. a[aria-label^='Inbox'][aria-label$='unread']
                        result = guc.getCountRe.exec(title || label);
                        if (result){
                            count = result.shift();
                        }
                    } else {// when trying to get count from selector e.g. tr.apv td.apt span b
                        count = document.querySelectorAll(selectorMail).length
                    }
                }
                if ( (isNaN( parseInt(count) ) || count === 0 ) && guc.settings.forceHTTP ){
                    guc.log("GUC; can't find count from DOM, trying from HTTP", label, selectorMail);
                    guc.settings.currentUpdateType = "HTTP";
                    guc.getUnreadCountHTTP();
                } else {
                    guc.log("GUC; found count "+ count +" from DOM", label, selectorMail);
                    guc.settings.currentUpdateType = "DOM";
                    guc.updateBadge(count);
                }
            },
            getUnreadCountHTTP: function(){
                var request = new XMLHttpRequest(),
                    fullcount,
                    url = guc.settings.mailURL;

                request.open('GET', url, true);

                request.onload = function() {
                    if (request.status >= 200 && request.status < 400) {
                        try {
                            fullcount = request.responseXML.querySelector("fullcount").firstChild.nodeValue;
                            guc.updateBadge( fullcount );
                            guc.log("GOT fullcount", fullcount);
                        } catch(e){
                            guc.log("unknow error", e);
                            guc.updateBadge( e );
                        }
                    } else {
                        guc.updateBadge( new Error("Bad status("+request.status+") from "+ url) );
                    }
                };

                request.onerror = function() {
                    guc.log("HTTP error");
                    guc.updateBadge( new Error('Error getting Gmail atom feed') );
                };

                request.send();
            },
            checkCount: function(){
                clearTimeout(guc.timer);
                guc.getUnreadCount();
            },
            setCheckCountTimer: function(){
                clearTimeout(guc.timer);
                guc.log("checking again in", guc.settings.timer[guc.settings.currentUpdateType]);
                guc.timer = setTimeout(guc.checkCount, guc.settings.timer[guc.settings.currentUpdateType]);
            },
            setFallbackIcon: function(link){
                var href = guc.isInbox ? "" : "data:image/x-icon;base64,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";
                link.setAttribute("href", href);
            },
            updateBadge: function(value){
                if (value === guc.previousValue){// don't bother nothing changed
                    guc.setCheckCountTimer();
                    return;
                }
                var count = parseInt(value);
                if ( isNaN(count) ){
                    guc.log("updating value to ", value);
                    if (typeof value === "object" || !value){// it's probably an Error object
                        guc.log("Error from Google Unread Counter extension", value);
                        value = "?";
                    }
                    favicon.badge(value, {bgColor: guc.getColorIcon("unknown", "bgColor"), textColor: guc.getColorIcon("unknown", "textColor")});
                } else if (count === 0 && settings.colors[guc.getAppName()].clear.hidden === "true"){
                    favicon.badge(-1);
                } else if (count === 0){
                    favicon.badge(guc.char.tick, {bgColor: guc.getColorIcon("clear", "bgColor"), textColor: guc.getColorIcon("clear", "textColor")});
                } else if (count > guc.settings.max) {
                    favicon.badge(guc.char.infinity, {bgColor: guc.getColorIcon("unread", "bgColor"), textColor: guc.getColorIcon("unread", "textColor")});
                } else {
                    favicon.badge(value, {bgColor: guc.getColorIcon("unread", "bgColor"), textColor: guc.getColorIcon("unread", "textColor")});
                }
                guc.previousValue = value;
                guc.setCheckCountTimer();
            }

    };

    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
        	clearInterval(readyStateCheckInterval);
            var link = document.querySelector("head link[rel*='icon']"),
                fallback;
            guc.convertImgToBase64URL(link.getAttribute("href"),function(base64){
                // callback when image has loaded
                link.setAttribute("href", base64 || ( guc.isInbox ? icons.inbox : icons.mail ) );
                favicon = new Favico({
                    animation: settings.animation,
                    position: settings.position,
                    type: settings.type
                });
                guc.getUnreadCount();
            });
        }
    }, 100);
});
