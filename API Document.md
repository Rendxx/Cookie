# API Document

## Set Cookie
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

## Get Cookie
     $$.cookie.get(name)
(string) Fetch certain cookie value by its name.  
return null if not found.

<div><br></div>

## Delete Cookie    
>Cookies with different __path / domain__ are considered as different entities.  
Make sure you use the **exactly same options** to delete the cookie if it is set with specialized path / domain.
  
     $$.cookie.del(name)
Delete a cookie of the given name.

<div><br></div>

     $$.cookie.del(opts)
Delete a cookie of the given name / domain / path.
