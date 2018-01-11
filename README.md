# kSh plugin jQuery

The Easy-to-use kSh plugin can easily **generate a table** (with the real weeknumber) from Lundi to Dimanche separated in 2 hours (eg: 6 to 8h).
This table is clickable (that's why the example in this git is a .php) and he return each cell selected (with days and hours).

### Installation

  **jQuery is required!**

kSh need the ksh.js to be declared in your file.

```sh
<script src="js/ksh.js"></script>
```

### Example of use 

```sh
 $('#divToAppend').kSh($('#divToAppend')); 
 ```

You need to pass in parameter the ```<div>``` to append the generate table. 

### Compatibility  

Thanks to its simplicity, kSh plugin is compatible with ![IE](https://vignette.wikia.nocookie.net/logopedia/images/5/5d/IE9.png/revision/latest/scale-to-width-down/200?cb=20121221232011), ![Chrome](https://vignette.wikia.nocookie.net/logopedia/images/c/ca/Google_Chrome_for_Android_Icon_2016.svg/revision/latest/scale-to-width-down/180?cb=20160305053723), ![Zozor](https://www.logaster.com/blog/wp-content/uploads/2012/08/firefox_current_logo.jpg), 