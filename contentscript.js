var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};

var s2 = document.createElement('script');
s2.src = chrome.extension.getURL('js/three.min.js');
(document.head||document.documentElement).appendChild(s2);
s2.onload = function() {
    s2.parentNode.removeChild(s2);
};

var s3 = document.createElement('script');
s3.src = chrome.extension.getURL('script2.js');
(document.head||document.documentElement).appendChild(s3);
s3.onload = function() {
    s3.parentNode.removeChild(s3);
};
