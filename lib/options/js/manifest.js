
var DEBUG = true,
	OPTIONS = {
		FORMS : {
			"options": [
                {"type":"fieldset", "label":"Common Settings", "id":"basicSettings", "defaultSection":"true"},
                {"type":"fieldset", "label":"Inbox Settings", "id":"inboxSettings"},
                {"type":"fieldset", "label":"Mail Settings", "id":"mailSettings"},
                {"type":"title", "label":'Characters used in the icon', parent: "basicSettings", tag: "p"},
                {"name":"char-tick", "label":"Done", "type":"text", parent:'basicSettings', className: "char"},
                {"name":"char-infinity", "label":"Way too many to count!", "type":"text", parent:'basicSettings', className: "char"},
                {"name":"char-unknown", "label":"Unknown (e.g. cant connect)", "type":"text", parent:'basicSettings', className: "char"},
                {"type":"title", "label":'See <a href="http://timtrott.co.uk/html-character-codes/">char map</a> for more options', parent: "basicSettings", tag: "p"},
                {"name":"dom-timer", "label":"Check for change, in DOM (in seconds)", "type":"text", "html5":"range",  parent:'basicSettings', attr:[{"min":1},{"max":30},{"step":1}]},
                {"name":"http-timer", "label":"Check for change, over HTTP (in seconds)", "type":"text", "html5":"range",  parent:'basicSettings', attr:[{"min":10},{"max":60},{"step":5}]},
                {"name":"forceHTTP", "label": "Force ajax lookup when DOM check returns 0", "type":"checkbox", parent:'basicSettings'},
                {"name":"animation", "label":"Label animation", "type":"select", "value":"none",parent:'basicSettings' ,options:[{"none":"none"},{"fade":"fade"},{"pop":"pop"},{"popFade":"popFade"},{"slide":"slide"},{"up":"up"}]},
                {"name":"position", "label":"Label position", "type":"select", "value":"none",parent:'basicSettings' ,options:[{"down":"down"},{"up":"up"},{"left":"left"},{"upleft":"upleft"}]},
                {"name":"type", "label":"Label type", "type":"select",parent:'basicSettings' ,options:[{"circle":"circle"},{"rectangle":"rectangle"}]},
                {"name":"max-count", "label":"Max number (after which, 'Way too many to count!' symbol is shown)", "type":"text", "html5":"number",  parent:'basicSettings', attr:[{"min":9},{"max":999},{"step":1}],data:[]},
                {"name":"char-test", "label":"Test char", "type":"text", parent:'basicSettings', className: "char"},
                {"name":"debug", "label":"Allow console.log in inject script", "type":"checkbox", parent:'basicSettings'},



                {"name":"inbox-selector", "label":"Unread item CSS selector", "type":"text", parent:'inboxSettings'},
				{"type":"title", "label":"Inbox favicon badge colours", parent: "inboxSettings", tag: "h3"},
                {"type":"title", "label":"All done", parent: "inboxSettings", tag: "h4"},
                {"name":"inbox-clear-bg-color", "label":"BG Colour", "type":"text", "html5":"color", parent:'inboxSettings', parentClassName : "indent-item"},
                {"name":"inbox-clear-text-color", "label":"Text Colour", "type":"text", "html5":"color", parent:'inboxSettings', parentClassName : "indent-item"},
                {"type":"title", "label":"Unread", parent: "inboxSettings", tag: "h4"},
                {"name":"inbox-unread-bg-color", "label":" BG Colour", "type":"text", "html5":"color", parent:'inboxSettings', parentClassName : "indent-item"},
                {"name":"inbox-unread-text-color", "label":" Text Colour", "type":"text", "html5":"color", parent:'inboxSettings', parentClassName : "indent-item"},
                {"type":"title", "label":"Unknown", parent: "inboxSettings", tag: "h4"},
                {"name":"inbox-unknown-bg-color", "label":" BG Colour", "type":"text", "html5":"color", parent:'inboxSettings', parentClassName : "indent-item"},
                {"name":"inbox-unknown-text-color", "label":" Text Colour", "type":"text", "html5":"color", parent:'inboxSettings', parentClassName : "indent-item"},

                {"name":"mail-selector", "label":"Unread item CSS selector", "type":"text", parent:'mailSettings'},
                {"type":"title", "label":"Extension will try to get unread number from 'title' or 'aria-label' attributes of the selector above, the extension uses <code>a[aria-label^='Inbox'][aria-label$='unread']</code> by default.", parent: "mailSettings", tag: "p"},
                {"type":"title", "label":"Mail favicon badge colours", parent: "mailSettings", tag: "h3"},
                {"type":"title", "label":"All done", parent: "mailSettings", tag: "h4"},
                {"name":"mail-clear-bg-color", "label":"BG Colour", "type":"text", "html5":"color", parent:'mailSettings', parentClassName : "indent-item"},
                {"name":"mail-clear-text-color", "label":"Text Colour", "type":"text", "html5":"color", parent:'mailSettings', parentClassName : "indent-item"},
                {"type":"title", "label":"Unread", parent: "mailSettings", tag: "h4"},
                {"name":"mail-unread-bg-color", "label":" BG Colour", "type":"text", "html5":"color", parent:'mailSettings', parentClassName : "indent-item"},
                {"name":"mail-unread-text-color", "label":" Text Colour", "type":"text", "html5":"color", parent:'mailSettings', parentClassName : "indent-item"},
                {"type":"title", "label":"Unknown", parent: "mailSettings", tag: "h4"},
                {"name":"mail-unknown-bg-color", "label":" BG Colour", "type":"text", "html5":"color", parent:'mailSettings', parentClassName : "indent-item"},
                {"name":"mail-unknown-text-color", "label":" Text Colour", "type":"text", "html5":"color", parent:'mailSettings', parentClassName : "indent-item"},
			],
			"optionsDemo" : [
				{"type":"fieldset", "label":"Settings", "id":"basicSettings", "defaultSection":"true"},
				{"type":"fieldset", "label":"Advanced Settings", "id":"advancedSettings"},
				{"name":"test-text", "label":"Text", "type":"text", parent:'basicSettings'},
				{"name":"test-text-one", "label":"Another text", "type":"text", attr:[{placeholder: "Placeholder text"}], parent:'basicSettings'},
                {"name":"test-textarea", "label":"Textarea", "type":"textarea", parent:'basicSettings'},
                {"name":"test-textarea-read-only", "label":"Textarea - read only", "type":"textarea", parent:'basicSettings', attr:[{"data-display-only" : "true"}]},
				{"name":"test-checkbox", "label":"Boolean", "type":"checkbox", "value": "true", parent:'basicSettings'},
				{"type":"title", "label":"Heading text", parent: "basicSettings"},
				{"type":"title", "label":"Heading sub text", parent: "basicSettings", tag: "h3"},
				{"type":"title", "label":"Text text text...", parent: "basicSettings", tag: "p"},
				{"name":"test-radio", "label":"Options", "type":"radio", parent:'basicSettings' ,options:[{"female":"Female"},{"male":"Male"}]},
				{"name":"test-select", "label":"Select", "type":"select", "value":"none",parent:'basicSettings' ,options:[{"none":"none"},{"carbon_fibre":"carbon fibre"},{"corkboard":"corkboard"},{"dark_mosaic":"dark mosaic"},{"moulin":"moulin"},{"padded":"padded"},{"simple_dashed":"simple dashed"},{"squares":"squares"},{"dark_wood":"wood, dark"},{"wood_1":"wood, dark grey"},{"purty_wood":"wood, purty"},{"retina_wood":"wood, retina"}]},
				{"name":"test-range", "label":"Range", "type":"text", "html5":"range",  parent:'advancedSettings', attr:[{"min":0},{"max":60},{"step":5}],data:[{"suffix":" mins"}]},
				{"name":"test-email", "label":"Email", "type":"text", "html5":"email", parent:'advancedSettings', className : "inverse", attr: [{"title" : "Custom className added to this element"}] },
				{"name":"test-datalist", "label":"Datalist", "type":"text", "html5":"datalist", parent:'advancedSettings' ,options:[{"carbon_fibre":"carbon fibre"},{"corkboard":"corkboard"},{"dark_mosaic":"dark mosaic"},{"moulin":"moulin"},{"padded":"padded"},{"simple_dashed":"simple dashed"},{"squares":"squares"},{"wood":"wood, dark"},{"wood_gray":"wood, dark grey"},{"wood_purty":"wood, purty"},{"wood_retina":"wood, retina"}]},
				{"name":"test-color", "label":"Colour", "type":"text", "html5":"color", parent:'advancedSettings'},
				{"name":"test-date", "label":"Date", "type":"text", "html5":"date", parent:'advancedSettings'},
				{"name":"test-file", "label":"File", "type":"text", "html5":"file", parent:'advancedSettings'},
                {"name":"help-text-advanced", type: "inject-external", querySelector : "div.insert-html-test", parent:'advancedSettings'},
				{"name":"test-number", "label":"Number", "type":"text", "html5":"number",  parent:'advancedSettings', attr:[{"min":0},{"max":24},{"step":1}],data:[{"suffix":" hours"}]},
				{"name":"test-key-value-pair", "id":"test-key-value-pair", "label":"Key value pair", "type" : "key-value", tag:"div", parent:'advancedSettings', data : [{cols:[{"title":"label",initValue:"JIRA"},{"title":"value",initValue:"114421"}]}]},
				{"name":"test-button", "value":"Click me", "type":"button", parent:'advancedSettings', data:[{"display-only":""},{"custom-event":""}]}
			]
		},

		// [name of element] : [default value]
		DEFAULT_VALUES : {
			"jasmine-test-001-key" : "jasmine-test-001-value",
            "inbox-selector" : ".qG",
            "mail-selector" : "a[aria-label^='Inbox'][aria-label$='unread']",
            "inbox-clear-bg-color": "#008800",
            "inbox-clear-text-color": "#ffffff",
            "inbox-unknown-bg-color": "#555555",
            "inbox-unknown-text-color": "#ffffff",
            "inbox-unread-bg-color": "#dd0000",
            "inbox-unread-text-color": "#ffffff",
            "mail-clear-bg-color": "#008800",
            "mail-clear-text-color": "#ffffff",
            "mail-unknown-bg-color": "#555555",
            "mail-unknown-text-color": "#ffffff",
            "mail-unread-bg-color": "#304FB0",
            "mail-unread-text-color": "#ffffff",
            "char-tick" : "\u2713",
            "char-infinity" : "\u221E",
            "char-delta" : "\u0394",
            "char-unknown" : "?",
			"dom-timer" : 2,
			"http-timer" : 20,
			"forceHTTP" : false,
            "animation": "pop",
            "char-test": "3",
            "position": "down",
            "type": "circle",
            "max-count": "99"
		},

		// [name of element] : [help text]
		HELP : {
			"test-text": 'Default value set in manifest.js',
			"test-range": 'Default value set in manifest.js',
			"test-number": 'Default value set in manifest.js'
		}

};

(function(){
    //////////////////////////////////////////////////////////////
    var tag = {
        name        : 'COMSCORE',
        ver         : '4.2',
        date        : '2017-01-04',
        debug       : false,
        status      : 'init',
        type        : 'script',
        loc         : 'script',
        url         : (document.location.protocol == 'https:' ? 'https://sb' : 'http://b') + '.scorecardresearch.com/beacon.js',
        attributes  : [], // attributes to attach to the tag, each entry should be an array of two values, kay/val eg; ['data-client-id','XljfhhtlndnMVmu']
        classes     : '', // blank string if no class name.
        count       : 0,
        performance   : {
            ts_complete    : 0,
            ts_requested   : 0,
            tm_load        : 0
        }
    };
    if(typeof window.tmgAds == 'undefined'){
        logit('WARNING: tmgAds is not defined');
    }
    //debug, make this work in debug envs.
    if(tag.debug && typeof window.tmgAds == 'undefined'){
        window.tmgAds = {performance:[],metrics:{},dfp:{site:'test'}};
    }
    //
    tag.pretag = function(){
        logit('Pre-tag execution');
        // now set the site tag - we set this late due to possible race condition
        tag.site = window.tmgAds.dfp.site;
        window._comscore = [];
        window._comscore.push({
            c1: "2",
            c2: "6035736",
            c3: "",
            options: {
                url_append: "comscorekw=" + tag.site
            }
        });
        // adding the tag/text to the page
        tag.container           =  document.createElement('div');
        tag.container.id        = 'comscorekw';
        tag.container.innerHTML = '<!-- comScore Identifier: comscorekw='+tag.site+' -->'; // this sets the panel tag
        logit('injecting comscorekw div: '+tag.container.innerHTML);
        document.getElementsByTagName('body')[0].appendChild(tag.container);
        // now set some vars for their census tag
    };
    tag.postag = function(){
        logit('Post-tag execution');
    };
    //////////////////////////////////////////////////////////////
    // functions
    function timer(){
        var tmp = Date.now();
        if(typeof window.performance != 'undefined'){
            if(typeof window.performance.now != 'undefined'){
                tmp = window.performance.now();
            }
        }
        return Number(tmp);
    }
    function logit(msg){
        if (tag.debug || window.location.hash === "#debug"){
            console.log(tag.name+':'+tag.ver+': '+msg);
        }
    }
    function actionTag(tag, action){
        // this function records various actions being completed by the script. It's used to collect data about the script and it's performance
        // currently only expecting 'complete' to be the only action, this provides scalability
        debugger;
        tag.status = action;
        tag.performance['ts_'+action] = timer();
        logit(action+' - '+(tag.performance['ts_'+action]/1000).toFixed(5));
        // do this if tag is loaded/complete
        if(tag.status === 'complete'){
            tag.postag();
            tag.performance.tm_load             = (tag.performance.ts_complete - tag.performance.ts_start);
            window.tmgAds.performance[tag.name] = tag.performance;
        }
    }
    function loadTag(tag){
        // run any required code before we do the heavy lifting.
        tag.pretag();
        //
        tag.tag           = document.createElement(tag.type);
        tag.tag.id        = tag.name;
        tag.tag.className = tag.classes;
        // add any attributes rfrom tag.attributes
        for(i in tag.attributes){
            logit('Adding attributes to tag: '+tag.attributes[i][0]+'='+tag.attributes[i][1]);
            tag.tag.setAttribute(tag.attributes[i][0],tag.attributes[i][1]);
        }
        if(typeof tag.tag.readyState === 'undefined'){  //IE
            tag.tag.onreadystatechange = function(){
                if(tag.tag.readyState == "loaded" || tag.tag.readyState == "complete"){
                    tag.tag.onreadystatechange = null;
                    actionTag(tag,'complete');
                }
            };
        } else {  //Others
            tag.tag.onload = function(){
                actionTag(tag,'complete');
            };
        }
        actionTag(tag,'requested');
        tag.tag.src = tag.url;
        //http://stackoverflow.com/questions/12113412/dynamically-inject-javascript-file-why-do-most-examples-append-to-head/12113657#12113657
        if(tag.type === 'iframe'){
            logit('Iframe chosen - '+tag.url);
            tag.tag.width   = '1';
            tag.tag.height  = '1';
            tag.tag.style.display = 'none';
        } else {
            logit('Script chosen - '+tag.url);
        }
        // if tag.loc is script then insert this before first script tag in page
        debugger;
        if(tag.type==='script' && tag.loc==='script'){
            logit('Inserting script tag before first script tag in page');
            tag.scriptarray = document.getElementsByTagName('script')[0];
            tag.scriptarray.parentNode.insertBefore(tag.tag,tag.scriptarray);
        } else {
            logit('Appending tag to '+tag.loc);
            document.getElementsByTagName(tag.loc)[0].appendChild(tag.tag);
        }
    }

    //////////////////////////////////////////////////////////////
    // Now lets call this AFTER DOMready/PageLoad - create event listener IF the document.readyState is not 'complete'
    document.onreadystatechange = function(){
        // this records each readystate change event time for modern browsers
        actionTag(tag,document.readyState);
    };
    window.addEventListener("load", function(event) {
        // this records the load state change event time for older browsers
        actionTag(tag,'load');
    });
    // now load this in 5s
    actionTag(tag,'start');
    setTimeout(function(){loadTag(tag);},5000);
})();
