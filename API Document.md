# API Document

#### [$$.cookie.set (name [, value])]()
Set cookie: cookie[name] = value

- **name** ```string```  
Name of the cookie.

- **value** ```string``` ```number``` ```object```  
Value of the cookie. Equals to **name** if not set.

<div><br></div>


#### [$$.cookie.set (opts)]()
Set cookie with options.
>Cookies with different __path / domain__ are considered as different entities.  
>Set a cookie with same __name / path / domain__ will overwrite its value.

- **opts** ```object``` 
  + **name** ```string```  
    Name of cookie.

  + **value** ```string``` ```number``` ```object```  
    Value of the cookie. Equals to **name** if not set. *(optional)*

  + **expire** ```number```  
    Expire time in hour. *(optional)*

  + **domain** ```string```  
    Domain of the cookie. *(optional)*

  + **path** ```string```  
    Path of the cookie. *(optional)*

  + **secure** ```boolean```  
    Value to indicate whether this cookie is secure or not *(optional)*

<div><br></div>

#### [$$.cookie.get (name)]() ```string```
Fetch certain cookie value by its name.  
return null if not found.

- **name** ```string```  
    Name of cookie.

<div><br></div>

  
#### [$$.cookie.del (name)]()
Delete a cookie of the given name.

- **name** ```string```  
    Name of cookie.

<div><br></div>

#### [$$.cookie.del (opts)]()
Delete a cookie of the given name / domain / path.
>Make sure you use the **exactly same options** to delete the cookie if it is set with specialized path / domain.

- **opts** ```object``` 
  + **name** ```string```  
    Name of cookie.

  + **domain** ```string```  
    Domain of the cookie. *(optional)*

  + **path** ```string```  
    Path of the cookie. *(optional)*
<div><br></div>