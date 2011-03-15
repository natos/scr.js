/*
 *      Scr.pt.js
 *      Little tiny loader for javascript sources.
 *      0.1.1 - March 14 2011
 * 
 *      scr.pt("http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js", function() {
 *          $("#demo").html("jQuery Loaded from CDN");
 *      });
 */
var scr={pt: function(s, callback) {
    
    if (typeof s === "string") {
        s = [s]; // force array type
    }

    // Grab the script tag element on the document
    var script = document.getElementsByTagName("script")[0];
    
    var t = s.length;
    // For each source
    for (var i = 0; i < t; i++) {
        // Create a new script tag element
        var newScript = document.createElement("script");
        // define the load event to append the new script tag to the document
            // IE
            newScript.onreadystatechange = function() {
                if (newScript.readyState === 'loaded' || newScript.readyState === 'complete') {
                    newScript.onreadystatechange = null;
                    if (callback) {
                        callback();
                    }
                }
            }
        
            // others
            newScript.onload = function() {
                if (callback) {
                    callback();
                }
            }
        
        // define the source of new script tag element
        newScript.src = s[i];
        script.parentNode.insertBefore(newScript,script);
        

    }
}}