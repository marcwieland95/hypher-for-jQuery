;(function($) {

	var pluginName = 'Hypher for jQuery';
	var pluginVersion = '1.0.3';

	/**
	 * Hyphenation Constructor
	 * @param {Object} parent
	 * @param {Object} options
	 * @param {Object} nodeValue
	 * @param {String} language
	 */
	function Hypher(parent, options, nodeValue, language) {

		// Set default options
		var defaults = {

			// {String} Set the correct language for your content
			lang: language,

			// {Int} The minimum amount of characters on the left of the word
			leftMin: false,

			// {Int} The minimum amount of characters on the right of the word
			rightMin: false,

			// {Int} Minimumal word length to hyphenate
			minLength: 4,

			// {String} Pattern-file path (viewed from included hypher.js file)
			path: '../patterns/',

			// {Bol} By default the lang-patterns will be loaded automaticly. You can turn this off here and insert patterns by yourself
			autoload: true,

			// {Bol, String} This shows, where the words would hypenate - for debugging, add custom character inside string
			hypenChar: false,

			// {String} Add exceptions as a comma-separated string - add your custom hypenation with |  (vertical bar)
			exceptions: null,

			// {Bol} When set to true, options are shown as objects in console - for debugging
			devMode: false,

		};

		// Merge default with user option
		this.options = $.extend({}, defaults, options);

		// Convert lang-code to lowercase
		this.options.lang = this.options.lang.toLowerCase();

		// Asign pattern code to locale
	    this.langCode = {
	    	// Register every pattern file here
	    	// 'pattern-filename': ['locale', 'locale', etc.]
	        'be': [ 'be', 'be_by', 'be-by', 'bel' ], // Belarusian
	        'bn': [ 'bn', 'bn_bd', 'bn-bd' ], // Bengali
	        'ca': [ 'ca' ], // Catalan
	        'cs': [ 'cs', 'cs_cz', 'cs-cz' ], // Czech
	        'da': [ 'da', 'da_dk', 'da-dk' ], // Danish
	        'de': [ 'de', 'de_de', 'de-de', 'de_ch', 'de-ch', 'de_at', 'de-at' ], // German
	        'el-monoton': [ 'el', 'el-monoton' ], // Modern Monotonic Greek
	        'el-polyton': [ 'el-polyton' ], // Modern Polytonic Greek
	        'en-gb': [ 'en_gb', 'en-gb' ], // British English
	        'en-us': [ 'en', 'en_us', 'en-us' ], // US English
	        'eo': [ 'eo' ],
	        'es': [ 'es', 'es_es', 'es-es' ], // Spanish
	        'et': [ 'et', 'et_ee', 'et-ee' ], // Estonian
	        'fi': [ 'fi', 'fi_fi', 'fi-fi' ], // Finish
	        'fr': [ 'fr', 'fr_fr', 'fr-fr', 'fr_be', 'fr-be' ], // French
	        'grc': [ 'grc' ], // Ancient Greek
	        'gu': [ 'gu', 'gu_in', 'gu-in' ], // Gujarati
	        'hi': [ 'hi', 'hi_in', 'hi-in' ], // Hindi
	        'hu': [ 'hu', 'hu_hu', 'hu-hu' ], // Hungarian
	        'hy': [ 'hy' ], // Armenian
	        'it': [ 'it', 'it_it', 'it-it' ], // Italian
	        'kn': [ 'kn' ], // Kannada
	        'la': [ 'la' ], // Latin
	        'lt': [ 'lt', 'lt_lt', 'lt-lt' ], // Lithuanian
	        'lv': [ 'lv' ], // Latvian
	        'ml': [ 'ml', 'ml_in', 'ml-in' ], // Malayalam
	        'nb-no': [ 'nb', 'no', 'nb_no', 'nb-no', 'nn_no', 'nn-no' ], // Norwegian
	        'nl': [ 'nl', 'nl_nl', 'nl-nl', 'nl_be', 'nl-be' ], // Dutch
	        'or': [ 'or', 'ory' ], // Oriya
	        'pa': [ 'pa', 'pa_in', 'pa-in' ], // Panjabi
	        'pl': [ 'pl', 'pl_pl', 'pl-pl' ], // Polish
	        'pt': [ 'pt', 'pt_pt', 'pt-pt', 'pt_br', 'pt-br' ], // Portuguese
	        'ro': [ 'ro', 'ro_ro', 'ro-ro' ], // Romanian
	        'ru': [ 'ru', 'ru_ru', 'ru-ru' ], // Russian
	        'sk': [ 'sk', 'sk_sk', 'sk-sk' ], // Slovak
	        'sl': [ 'sl', 'sl_si', 'sl-si' ], // Slovenian
	        'sr-cyrl': [ 'sr-cyrl' ], // Serbian cyrillic
	        'sr-latn': [ 'sr-latn', 'sr', 'sr_rs', 'sr-rs' ], // Serbian latin
	        'sv': [ 'sv', 'sv_se', 'sv-se' ], // Swedish
	        'ta': [ 'ta', 'ta_in', 'ta-in', 'ta_lk', 'ta-lk' ], // Tamil
	        'te': [ 'te' ], // Telugu
	        'tr': [ 'tr', 'tr_tr', 'tr-tr' ], // Turkish
	        'uk': [ 'uk', 'uk_uk', 'uk-uk' ], // Ukrainian
	    };

	    Hypher.prototype.include = function(arr,obj) {
		    return (arr.indexOf(obj) != -1);
		};

		// Search for locale and set proper pattern file
		for (var key in this.langCode) {
			if (this.langCode.hasOwnProperty(key)) {
		    	if (this.include(this.langCode[key], this.options.lang)) {
		    		this.options.lang = key; // set current pattern code
		    		break;
		    	}
		  	}
		}

		// Prepare url for request
		if(this.options.path.substr(-1) === '/') {
			this.options.path = this.options.path.substr(0, this.options.path.length - 1);
		}
		if(this.options.path !== '') {
			this.options.path = this.options.path + '/';
		}

		if (this.options.autoload) {

			// Auto load pattern files
			$.ajax({
				url: this.options.path + this.options.lang + '.js',
				async: false, // all data have to be available to run
				dataType: 'script',
				cache: true,
				error: function (xhr, ajaxOptions, thrownError) {
					console.log('Pattern file can\'t be loaded - check path (' + this.options.path + ')');
				}
			});

		} else {

			// Error message and exit
			if (typeof Hyphenator === 'undefined') {
				console.log('Pattern isn\'t included - autoload is turned off');
			}

		}

		// Autoload is on, but pattern still isn't available
		if (typeof Hyphenator === 'undefined') {
			console.log('Pattern isn\'t included - maybe pattern file doesn\'t exists or path linked to the wrong directory - check path (' + this.options.path + ')');
		}

		// Set variables
		i = 0;

		 /**
		 * @type {!number}
		 * @const
		 */
		// Load content from patterns when noting set in settings
		if (!this.options.leftMin) this.options.leftMin = Hyphenator.languages[this.options.lang].leftmin;

		/**
		 * @type {!number}
		 * @const
		 */
		// Load content from patterns when noting set in settings
		if (!this.options.rightMin) this.options.rightMin = Hyphenator.languages[this.options.lang].rightmin;

		/**
		 * @type {!Object.<string, !Array.<string>>}
		 */
		// Load content from patterns when noting set in settings
		if (!this.options.exceptions) this.options.exceptions = Hyphenator.languages[this.options.lang].exceptions;

		this.exceptionsObject = {};

		if (this.options.exceptions) {
			exceptions = this.options.exceptions.split(/,\s?/g);

			for (; i < exceptions.length; i += 1) {
				this.exceptionsObject[exceptions[i].replace(/\|/g, '').toLowerCase()] = new RegExp('(' + exceptions[i].split('|').join(')(') + ')', 'i'); // \u2027
			}
		}

		/**
		 * @type {!Hypher.TrieNode}
		 */
		this.trie = this.createTrie(Hyphenator.languages[this.options.lang].patterns);

		// Return hypenation to replace TextNode
		this.hypens = this.hyphenateText(nodeValue);

		// Return global settings
		this.globalSettings = this.options;

	}

	/**
	 * Creates a trie from a language pattern.
	 * @private
	 * @param {!Object} patternObject An object with language patterns.
	 * @return {!Hypher.TrieNode} An object trie.
	 */
	Hypher.prototype.createTrie = function (patternObject) {
		var size = 0,
			i = 0,
			c = 0,
			p = 0,
			chars = null,
			points = null,
			codePoint = null,
			t = null,
			tree = {
				_points: []
			},
			patterns;

		for (size in patternObject) {
			if (patternObject.hasOwnProperty(size)) {
				patterns = patternObject[size].match(new RegExp('.{1,' + (+size) + '}', 'g'));

				for (i = 0; i < patterns.length; i += 1) {
					chars = patterns[i].replace(/[0-9]/g, '').split('');
					points = patterns[i].split(/\D/);
					t = tree;

					for (c = 0; c < chars.length; c += 1) {
						codePoint = chars[c].charCodeAt(0);

						if (!t[codePoint]) {
							t[codePoint] = {};
						}
						t = t[codePoint];
					}

					t._points = [];

					for (p = 0; p < points.length; p += 1) {
						t._points[p] = points[p] || 0;
					}
				}
			}
		}

		return tree;
	};

	/**
	 * Hyphenates a text.
	 *
	 * @param {!string} str The text to hyphenate.
	 * @return {!string} The same text with soft hyphens inserted in the right positions.
	 */
	Hypher.prototype.hyphenateText = function (str) {

	// Regexp("\b", "g") splits on word boundaries,
	// compound separators and ZWNJ so we don't need
	// any special cases for those characters. Unfortunately
	// it does not support unicode word boundaries, so
	// we implement it manually.
	var words = str.split(/([a-zA-Z0-9_\u0027\u00AD\u00DF-\u00EA\u00EB\u00EC-\u00EF\u00F1-\u00F6\u00F8-\u00FD\u0101\u0103\u0105\u0107\u0109\u010D\u010F\u0111\u0113\u0117\u0119\u011B\u011D\u011F\u0123\u0125\u012B\u012F\u0131\u0135\u0137\u013C\u013E\u0142\u0144\u0146\u0148\u0151\u0153\u0155\u0159\u015B\u015D\u015F\u0161\u0165\u016B\u016D\u016F\u0171\u0173\u017A\u017C\u017E\u017F\u0219\u021B\u02BC\u0390\u03AC-\u03CE\u03F2\u0401\u0410-\u044F\u0451\u0454\u0456\u0457\u045E\u0491\u0531-\u0556\u0561-\u0587\u0902\u0903\u0905-\u090B\u090E-\u0910\u0912\u0914-\u0928\u092A-\u0939\u093E-\u0943\u0946-\u0948\u094A-\u094D\u0982\u0983\u0985-\u098B\u098F\u0990\u0994-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BE-\u09C3\u09C7\u09C8\u09CB-\u09CD\u09D7\u0A02\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A14-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A82\u0A83\u0A85-\u0A8B\u0A8F\u0A90\u0A94-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABE-\u0AC3\u0AC7\u0AC8\u0ACB-\u0ACD\u0B02\u0B03\u0B05-\u0B0B\u0B0F\u0B10\u0B14-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3E-\u0B43\u0B47\u0B48\u0B4B-\u0B4D\u0B57\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB5\u0BB7-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C02\u0C03\u0C05-\u0C0B\u0C0E-\u0C10\u0C12\u0C14-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3E-\u0C43\u0C46-\u0C48\u0C4A-\u0C4D\u0C82\u0C83\u0C85-\u0C8B\u0C8E-\u0C90\u0C92\u0C94-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBE-\u0CC3\u0CC6-\u0CC8\u0CCA-\u0CCD\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3E-\u0D43\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D60\u0D61\u0D7A-\u0D7F\u1F00-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB2-\u1FB4\u1FB6\u1FB7\u1FBD\u1FBF\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD2\u1FD3\u1FD6\u1FD7\u1FE2-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u200D\u2019]+)/gi);

		for (var i = 0; i < words.length; i += 1) {
			if (words[i].indexOf('/') !== -1) {
				// Don't insert a zero width space if the slash is at the beginning or end
				// of the text, or right after or before a space.
				if (i !== 0 && i !== words.length - 1 && !(/\s+\/|\/\s+/.test(words[i]))) {
					words[i] += '\u200B';
				}
			} else if (words[i].length > this.options.minLength) {
				// Hyphernate
				if(!this.options.hypenChar) {
					words[i] = this.hyphenate(words[i]).join('\u00AD');

				// Allow preview for hyphenation
				} else if (typeof this.options.hypenChar === "string") {
					// Custom character for hyphenation
					words[i] = this.hyphenate(words[i]).join(this.options.hypenChar);
				} else {
					// Default hyphenation character - if debugging mode is on (hypenChar = true)
					words[i] = this.hyphenate(words[i]).join('|');
				}
			}
		}

		return words.join('');
	};

	/**
	 * Hyphenates a word.
	 *
	 * @param {!string} word The word to hyphenate
	 * @return {!Array.<!string>} An array of word fragments indicating valid hyphenation points.
	 */
	Hypher.prototype.hyphenate = function (word) {
		var characters,
			characterPoints = [],
			originalCharacters,
			i,
			j,
			k,
			node,
			points = [],
			wordLength,
			lowerCaseWord = word.toLowerCase(),
			nodePoints,
			nodePointsLength,
			m = Math.max,
			trie = this.trie,
			result = [''];

		if (this.exceptionsObject.hasOwnProperty(lowerCaseWord)) {
			return word.match(this.exceptionsObject[lowerCaseWord]).slice(1);
		}

		if (word.indexOf('\u00AD') !== -1) {
			return [word];
		}

		word = '_' + word + '_';

		characters = word.toLowerCase().split('');
		originalCharacters = word.split('');
		wordLength = characters.length;

		for (i = 0; i < wordLength; i += 1) {
			points[i] = 0;
			characterPoints[i] = characters[i].charCodeAt(0);
		}

		for (i = 0; i < wordLength; i += 1) {
			node = trie;
			for (j = i; j < wordLength; j += 1) {
				node = node[characterPoints[j]];

				if (node) {
					nodePoints = node._points;
					if (nodePoints) {
						for (k = 0, nodePointsLength = nodePoints.length; k < nodePointsLength; k += 1) {
							points[i + k] = m(points[i + k], nodePoints[k]);
						}
					}
				} else {
					break;
				}
			}
		}

		for (i = 1; i < wordLength - 1; i += 1) {
			if (i > this.options.leftMin && i < (wordLength - this.options.rightMin) && points[i] % 2) {
				result.push(originalCharacters[i]);
			} else {
				result[result.length - 1] += originalCharacters[i];
			}
		}

		return result;
	};

	$.fn.hyphenate = function(options) {

		if (options === undefined) {
			options = ''; // options can't be undefined or null
		}

		if (options.lang !== undefined) {
			language = options.lang;
		} else {
			language = document.getElementsByTagName('html')[0].getAttribute('lang');
		}

		// Set number of execution
		var exTimes = this.length;

		return this.each(function (index) {
			var i = 0, len = this.childNodes.length;
			for (; i < len; i += 1) {
				if (this.childNodes[i].nodeType === 3) {
					var CacheHypher = new Hypher( $(this), options, this.childNodes[i].nodeValue, language );
					this.childNodes[i].nodeValue = CacheHypher.hypens;

					// Run only on last execution
					if (index == exTimes - 1) {
						// Return infos for devs
						if (CacheHypher.globalSettings.devMode) {
							console.log(pluginName + ' - ' + pluginVersion);
							console.log(CacheHypher.globalSettings);
						}
          			}
				}
			}
		});

	};

})($);