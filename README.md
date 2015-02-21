# Hypher for jQuery

A small and fast JavaScript hyphenation engine for jQuery.
The core is based on the code of Bram Stein (@bramstein), which is build for jQuery and Node.js, but has some pitfalls in the jQuery version.

We are in a stable beta version. So feel free to use it. We're looking forward to some improvements.

##Setup
Have a look inside the `@example` folder.

###1. Include jQuery
This hyphenation engine is mostly written in plain JavaScript, but also needs jQuery.

``` html
<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
```

###2. Include language pattern
Make sure to include the right pattern for your desired languaga. You can use Hypher with multiple languages.
The patterns are inside the patterns folder.

The engines pattern files are compatible to the file from Hyphenator.js. Because of this we have to init an empty array. Hypens won't work instead.(This will change in future)
``` html
<script>
    // This is just a fix - will be removed in future versions
    Hyphenator = [];
    Hyphenator.languages = [];
</script>

<script src="patterns/en-us.js"></script>
<script src="patterns/de.js"></script>
```

###3. Include Hypher
Include the main file after the language patterns. (`dist/jquery.hypher.js`)
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

… if you customize some options, do it like this

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
Your available settings in Hypher

| Option | Default | Type | Description
|--------|---------|------|------------
| `lang` | lang-attribute in html | String | Set the correct language for your content. Make sure to set the name of your pattern file
| `leftMin` | pattern file | Int | The minimum amount of characters on the left of the word
| `rightMin` | pattern file | Int | The minimum amount of characters on the right of the word
| `minLength` | `4` | Int | Minimumal word length to hyphenate
| `hypenChar` | `false` | Bol | This shows, where the words would hypenate - for debuging
| `exceptions` | pattern file | string | Add exceptions as a comma-separated string - add your custom hypenation with |  (vertical bar)