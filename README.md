# Cookie
set / get / delete cookie.

*Download: [Cookie v3.0](https://github.com/Rendxx/Cookie/releases/tag/3.0 "Download")*

# Dependency
- [jQuery][]

#API
     $$.cookie.set(name)
Set cookie: cookie[name] = name  

<div><br></div>

     $$.cookie.set(name, value)
Set cookie: cookie[name] = value

<div><br></div>

     $$.cookie.set(opts)
Set cookie with options

- opts: 
  + **name**: name of cookie
  + **value**: value of cookie (optional)
  + **expire**: expire time in hour (optional)
  + **domain**: domain of the cookie (optional)
  + **path**: cookie path (optional)
  + **secure**: boolean value to indicate whether this cookie is secure or not (optional)

<div><br></div>
    
     $$.cookie.get(name)
(string) Fetch certain cookie value by its name.  
return null if not found.

<div><br></div>
    
     $$.cookie.del(opts)
Delete a cookie of the given name / domain / path.

***NOTE**: Cookies with different **path / domain** are considered as different entities.*  
*Make sure you use the same options to delete the cookie with specialized path / domain.*
<div><br></div>
    
     $$.cookie.del(name)
Delete a cookie of the given name.

<div><br></div>

# Code Sample
JavaScript:

    $$.cookie.set("test","BlaBlaBla"); // set cookie["test"] = "BlaBlaBla"
    var val = $$.cookie.get("test"); // get value of cookie["test"]
    $$.cookie.del("test"); // delete cookie["test"]

# Compatibility
- Chrome
- Fire Fox
- Safari
- Edge
- IE 9-11
- IE 7,8

[jQuery]: https://jquery.com/ "jQuery Home Page"