# Cookie
set / get / delete cookie.

*Sample: [http://www.rendxx.com/Lib/Sample/11](http://www.rendxx.com/Lib/Sample/11 "Sample")*  
*Download: [Cookie v0.3.1](https://github.com/Rendxx/Cookie/releases/tag/0.3.1 "Download")*

## Install
Download the package from bower
```
bower install r-cookie --save
```

Including the file in your webpage
```HTML
<script type="text/javascript" src="/node_modules/r-cookie/js/Cookie.js"></script>
```

See **Code Sample** below for more details.

## API
[API Document](https://github.com/Rendxx/Cookie/blob/master/API%20Document.md)

## Dependency
- [jQuery][]

## Code Sample
JavaScript:

```javascript
$$.cookie.set("test","BlaBlaBla"); // set cookie["test"] = "BlaBlaBla"
var val = $$.cookie.get("test"); // get value of cookie["test"]
$$.cookie.del("test"); // delete cookie["test"]
```

## Compatibility
```Chrome``` ```Fire Fox``` ```Safari``` ```Edge``` ```IE 9-11``` ```IE 7,8```

## License 
Copyright &copy; 2015, Rendxx. (MIT License)  
See [LICENSE][] for more info.

[jQuery]: https://jquery.com/ "jQuery Home Page"
[LICENSE]: https://github.com/Rendxx/Cookie/blob/master/LICENSE