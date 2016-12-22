

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var data = {options:{},guc:{}};
    data.test = options.getLocalStore("mail-selector");
    if (request.action && request.action === "get-settings"){
        data.options.settings = {
            "colors" : {
                "inbox":{
                    "unknown" : {
                        bgColor : options.getLocalStore("inbox-unknown-bg-color"),
                        textColor : options.getLocalStore("inbox-unknown-text-color")
                    },
                    "clear" : {
                        bgColor : options.getLocalStore("inbox-clear-bg-color"),
                        textColor : options.getLocalStore("inbox-clear-text-color")
                    },
                    "unread" : {
                        bgColor : options.getLocalStore("inbox-unread-bg-color"),
                        textColor : options.getLocalStore("inbox-unread-text-color")
                    }
                },
                "gmail":{
                    "unknown" : {
                        bgColor : options.getLocalStore("mail-unknown-bg-color"),
                        textColor : options.getLocalStore("mail-unknown-text-color")
                    },
                    "clear" : {
                        bgColor : options.getLocalStore("mail-clear-bg-color"),
                        textColor : options.getLocalStore("mail-clear-text-color")
                    },
                    "unread" : {
                        bgColor : options.getLocalStore("mail-unread-bg-color"),
                        textColor : options.getLocalStore("mail-unread-text-color")
                    }
                }
            }
        };
        data.options.guc = {
            char : {
                tick: options.getLocalStore("char-tick"),
                infinity: options.getLocalStore("char-infinity"),
                delta: "\u0394"
            },
            selectors : {
                "inbox" : options.getLocalStore("inbox-selector"),
                "mail" : options.getLocalStore("mail-selector")
            },
            settings : {timer:{"HTTP":20000,"DOM":2000},currentUpdateType:null,max:999,useDOM:true}
        };
        sendResponse(data);
    } else {
        console.log("Unrecognised message received");
    }
});

