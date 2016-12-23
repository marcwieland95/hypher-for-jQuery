# Hypher for jQuery

A small and fast JavaScript hyphenation engine for jQuery (and also Zepto.js).
Hypher is the fastest javascipt based hypenation engine and is very lightweight. It's also very easy to use.

The core is based on the code of Bram Stein (@bramstein), which is build for jQuery and Node.js, but has some pitfalls in the jQuery version.

##Requirements

- Apache/NGINX (the script needs to do some HTTP Requests)

##Setup
Have a look inside the `@example` folder.

###1. Include jQuery or Zepto.js
This hyphenation engine is mostly written in plain JavaScript, but also needs jQuery or Zepto.js.

jQuery 1.x, 2.x or 3.x
Because it's just an wrapper for jQuery. The web-plugin works with every version of jQuery. The core is written in plain javascipt.
``` html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
```
Zepto.js
``` html
<script src="http://zeptojs.com/zepto.min.js"></script>
```

###2. Include language pattern
Make sure to include the right pattern for your desired language. You can use Hypher with multiple languages.
The patterns are inside the patterns folder (easiest way to do: copy the whole patterns-folder in your project). Be sure to set the language code either in the settings or embeed it into the "lang" attribute inside the HTML-tag.
You can use the language code (ISO 639-1) or also the WordPress Locale, which mostly includes the country. All patterns are compatible with the following list, see [Internationalization](http://wpcentral.io/internationalization/).

###3. Include Hypher
Include the main file. (`dist/jquery.hypher.js`)
``` html
<script src="dist/jquery.hypher.js"></script>
```

###4. Init
Select the text you'd like to hyphenate and then call the function.
``` html
<script>
    $('p').hyphenate();
</script>
```

… if you like to customize it a little, do it like this:

``` html
<script>
    $('h3, .lead').hyphenate({
        lang: 'de',
        hypenChar: true,
        exceptions: 'Flatla|nd, bec|ause'
    });
</script>
```

##Customization
Your available settings in Hypher:

| Option | Default | Type | Description
|--------|---------|------|------------
| `lang` | lang-attr in html | String | Set the correct language for your content. Make sure to set the name of your pattern file
| `leftMin` | patterns | Int | The minimum amount of characters on the left of the word
| `rightMin` | patterns | Int | The minimum amount of characters on the right of the word
| `minLength` | `4` | Int | Minimumal word length to hyphenate
| `path` | `'../patterns'` | String | Pattern-file path (viewed from included hypher.js file)
| `autoload` | `true` | Bol | By default the lang-patterns will be loaded automaticly. You can turn this off here and insert patterns by yourself.
| `hypenChar` | `false` | Bol/String | This shows, where the words would hypenate - for debugging. You can also add a string with your preferred character. (Default is &#124;)
| `exceptions` | patterns | String | Add exceptions as a comma-separated string - add your custom hypenation with &#124; (vertical bar)
| `devMode` | `false` | Bol | When set to true, options are shown as objects in console - for debugging.


###Include lang-patterns manually
You're free to include language pattern by hand like below.
Be sure to disable the autoload settings inside hyphers function call.

``` html
<script src="patterns/en-us.js"></script>
<script src="patterns/de.js"></script>

<script>
    $('h3').hyphenate({
        autoload: false,
    });
</script>
```

##Changelog
`1.0.3` / `23.12.2016`
- Fix hyphenating all uppercase text
- Fix inconsistent soft hyphen handling.

`1.0.2` / `04.11.2016`
- Update to jQuery 3 and test it
- Edit metadata

`1.0.1` / `05.01.2016`
- Remove case sensitive validation for language (de-CH is now equal to de-ch)
- Return options in console when option 'devMode' set to true - for debugging

`1.0.0` / `27.08.2015`
- Autoload pattern files
- Improve patterns locale
- Register all pattern-files and add some logic to it
- Minor tweaks inside settings

`0.2.0` / `21.02.2015`
- Add Zepto.js support
- Add different settings for customization
- Easier init

`0.1.0` / `21.02.2015`
- Bootstrap
- Core engine written by Bram Stein (https://github.com/bramstein/hypher)

## License
Hypher is licensed under the three clause BSD license (see BSD.txt.)

## See also
* [Hypher](https://github.com/bramstein/hypher)
* [Hyphenator.js](http://code.google.com/p/hyphenator/)

## Contributors
* Bram Stein - core hypenation engine
* Marc Wieland - improved jQuery support