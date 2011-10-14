/**
 *      scr.js 0B
 *      Little tiny loader for javascript sources.
 *      0.1.4 - 14/10/2011
 * 
 *      scr.js("http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js", function() {
 *          $("#demo").html("jQuery Loaded from Google CDN");
 *      });
 */

(function (d) {

    "use strict";

    window.scr =  {

        js: function (s, c) {

            if (typeof s === "string") {
                s = [s]; // force array type
            }
            
            var script, b, callback, ready, i, e, n;
            
            // Grab the script tag element on the document
            script = d.getElementsByTagName("script")[0];
            
            // Buffer
            b = { 
                t: s.length, 
                i: 0 
            };
            // Buffer ready
            b.r = function () { 
                return b.t === b.i; 
            };
            
            // Callback function
            callback = function () {
                // increment script loaded
                b.i += 1;
				// Check if is ready to excecute callback
                if (c && b.r()) { c() }
            };

            // Ready function
            ready = (function () {
                // Feature detection for IE
                if (script.readyState) {
                    return function (n) {
                        n.onreadystatechange = function () {
                            if (n.readyState === 'loaded' || n.readyState === 'complete') {
                                n.onreadystatechange = null;
                                callback();
                            }
                        };
                    };
                // For standar browsers
                } else {
                    return function (n) {
                        n.onload = function () {
                            callback();
                        };
                    };
                }
            
            }());

			// Iteration
            i = 0; e = d.createElement("script");

            // For each source
            for (i; i < b.t; i += 1) {
                // define the load event to append the new script tag to the document
                n = e.cloneNode(true); ready(n);
                // define the source of new script tag element
                n.src = s[i];
				// apend to DOM
                script.parentNode.insertBefore(n, script);

            }
        }
    };

}(document));