# CookieUtils的使用

CookieUtils使用方法如下

> CookieUtils.set('name','lifeng','/'); //把name=lifeng的键值对添加到cookie中

> CookieUtils.get('name');//获得cookie中name的值

> CookieUtils.del('name');//删除cookie中name的值

> CookieUtils.setSimpleCookie('name','test');//默认保存在cookie中保存一天name=test

> CookieUtils.getSimpleCookie('name');//直接过去cookie中的，没有处理前后空格符

其实cookie存储长度被限制了，所以一般可以使用html5的本地存储来存储localStorage
