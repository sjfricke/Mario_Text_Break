// NOTE: Order of script is order of loading
var files = ["lib/three.js", "script.js", "script2.js"];

addScriptFile(files[0], function(){
    addScriptFile(files[1], function(){
        addScriptFile(files[2], function(){
//            addScriptFile(files[3], function(){
//        
//            })
        })
    })
})


function addScriptFile(fileURL, callback) {
    var s = document.createElement('script');
    s.src = chrome.extension.getURL(fileURL);
    (document.head||document.documentElement).appendChild(s);
    s.onload = function() {
        s.parentNode.removeChild(s);
//        callback("Done with " + fileURL);
        console.log("Done with " + fileURL);
        callback();
    };
}


/*var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    console.log("script");
    s.parentNode.removeChild(s);
};

var s2 = document.createElement('script');
s2.src = chrome.extension.getURL('js/three.min.js');
(document.head||document.documentElement).appendChild(s2);
s2.onload = function() {
    console.log("Three");
    s2.parentNode.removeChild(s2);
};

var s3 = document.createElement('script');
s3.src = chrome.extension.getURL('script2.js');
(document.head||document.documentElement).appendChild(s3);
s3.onload = function() {
    console.log("script2");
    s3.parentNode.removeChild(s3);
};*/
