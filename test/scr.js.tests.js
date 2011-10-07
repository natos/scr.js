
describe("Integration proof of faith", function() {

	it("scr object must defined as a global object", function() {
	
		expect( scr ).toBeDefined( );
	
	});

	it("scr object should be a object", function() {
	
		expect( typeof scr ).toEqual( "object" );
	
	});

});	

describe("Async rolling", function() {

	it("Single loading resource (jQuery)", function() {
	
		waits(1000);
	
		scr.js("http://code.jquery.com/jquery-latest.js", function(){

			expect( $ ).toBeDefined( );

		});
	
	});

	it("Multiple loading resource (jQuery plugins)", function() {

        var plugins = ["http://plugins.jquery.com/files/jquery.magicScroller.v1.js_0.txt",
                       "http://jquery-jsonp.googlecode.com/files/jquery.jsonp-2.1.4.min.js"];

		waits(1000);
			
		scr.js(plugins, function(){

			expect( typeof $().magicScroller ).toEqual( "function" );

			expect( typeof $().magicScroller ).toEqual( "function" );

		});
	
	});


});