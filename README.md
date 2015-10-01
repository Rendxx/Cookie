# Cookie
set / get / delete cookie.

*Download: [https://github.com/Rendxx/Cookie/releases/tag/3.0 "Download")*

# Dependency
- [jQuery][]

#API
     $$.cookie.set(name)
Set cookie: cookie[name] = name  

######  &nbsp;

     $$.cookie.set(name, value)
Set cookie: cookie[name] = value

######  &nbsp;

     $$.cookie.set(opts)
Set cookie with options

- opts: 
  + **name**: name of cookie
  + **value**: value of cookie (optional)
  + **expire**: expire time in hour (optional)
  + **domain**: domain of the cookie (optional)
  + **path**: cookie path (optional)
  + **secure**: boolean value to indicate whether this cookie is secure or not (optional)


######  &nbsp;
    
     $$.cookie.get(name)
(string) Fetch certain cookie value by its name.  
return null if not found.

######  &nbsp;
    
     $$.cookie.del(opts)
Delete a cookie of the given name / domain / path.

######  &nbsp;
    
     $$.cookie.del(name)
Delete a cookie of the given name.

######  &nbsp;

# Compatibility
- Chrome
- Fire Fox
- Safari
- Edge
- IE 9-11
- IE 7,8

[jQuery]: https://jquery.com/ "jQuery Home Page"