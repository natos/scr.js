Require.js
==========
Little tiny loader (4k) for javascript sources.

Really easy to use
------------------
- Add require.js source to your web document.
- Tell require.js the url of the javascript resource you want to load,
- or an array of resources.
- Define a optional callback to execute when the source is loaded,
- That's all ;)

Example "Using Require.js"
--------------------------
    
    require("http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js", function() {

        $("#demo").html("jQuery Loaded from CDN");

    });
