/*
 *      scr.js 0B
 *      Little tiny loader for javascript sources.
 *      0.1.2 - March 17 2011
 * 
 *      scr.js("http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js", function() {
 *          $("#demo").html("jQuery Loaded from Google CDN");
 *      });
 */

(function(d){

window.scr =  {
 
    js: function(s, c) {

        if (typeof s === "string") {
            s = [s]; // force array type
        }
        
        // Grab the script tag element on the document
        var script = d.getElementsByTagName("script")[0];
        // Loader buffer
        var b = { t: s.length, i: 0 };
            b.r = function() { return b.t === b.i; };
        // Callback function
        var callback = function() {
            // increment script loaded
            b.i++;
            
            if (c&&b.r()) {
                c();
            }
        };
        // Ready function
        var ready = (function() {
            // Feature detection for IE
            if (script.readyState) {
                return function(n) {
                    n.onreadystatechange = function() {
                        if (n.readyState === 'loaded' || n.readyState === 'complete') {
                            n.onreadystatechange = null;
                                callback();
                        }
                    };
                };
            // For others
            } else {
                return function(n) {
                    n.onload = function() {
                        callback();
                    };
                };
            }
            
        }());
                            
        var i = 0;
        var e = d.createElement("script");
                // I'm not sure if this is necessary
                d.type = "text/javascript";

        // For each source
        for (i; i < b.t; i++) {
            // define the load event to append the new script tag to the document
            var n = e.cloneNode(true);
            ready(n);
            // define the source of new script tag element
            n.src = s[i];
            script.parentNode.insertBefore(n,script);
            
        }
    }   
};

}(document));