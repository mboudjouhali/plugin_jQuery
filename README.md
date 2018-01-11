# plugin_jQuery

The Easy-to-use kSh plugin can easily generate a table (with the real weeknumber) from Lundi to Dimanche separated in 2 hours (eg: 6 to 8h).
This table is clickable (that's why the example in this git is a .php) and he return each cell selected (with days and hours)

### Installation

`jQuery is required!` 

kSh need the ksh.js to be declared in your file.

```sh
<script src="js/ksh.js"></script>
```

### Example of use 

```sh
 $('#divToAppend').kSh($('#divToAppend')); 
 ```

You need to pass in parameter the ```<div>``` to append with the generate table. 
