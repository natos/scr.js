scr.js
==========
Little tiny loader for javascript sources.

Really easy to use
------------------
- Add scr.js source to your web document.
- Tell scr.js the url of the javascript resource you want to load,
- or an array of resources.
- Define a optional callback to execute when the source is loaded,
- That's all ;)

Example "Using scr.js"
--------------------------
    
    scr.js("http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js", function() {

        $("#demo").html("jQuery Loaded from CDN");

    });
