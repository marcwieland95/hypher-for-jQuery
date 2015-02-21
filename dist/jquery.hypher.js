/*!
 * hypher-for-jquery
 * Version: 0.1.0
 * This is a hyphenation engine for jQuery
 * Author: @xxcram
 * Site: http://https://github.com/xxcram/
 * Licensed under the BSD license
 */
;(function ($, window, document, undefined) {

	var name = 'hypher',
	defaults = {

		// {Bool} Set the correct language of your content
		lang: $('html').attr('lang'),

	};


	/**
	 * Slider Constructor
	 * @param {Object} parent
	 * @param {Object} options
	 */
	function Hypher(parent, options) {

		// Cache this
		var self = this;

		// Extend options
		this.options = $.extend({}, defaults, options);

		// Test console.log
		console.log( this.options.lang );


	}

	/**
	 * Building slider
	 */
	/*
	Hypher.prototype.build = function() {



	});
	*/



	$.fn[name] = function(options) {

		new Hypher($(this), options);

		/*
		return this.each(function () {
			if ( !$.data(this, 'api_' + name) ) {
				$.data(this, 'api_' + name,
					new Hypher($(this), options)
				);
			}
		});
		*/

	};

})(jQuery, window, document);