var name = 'sejan';
var age = 25;
;var isAge25 =true;

var items =['light','pen', "book"];

console.log(items.indexOf('light'))
console.log(typeof 'light' )
console.log(items.length)

items.push("laptop")
items.shift()
console.log(items)

if (items.length>= 3){
    console.log("it is three")
}
else if(items.length <= 3){
    console.log("it is not three")
}
else{
    console.log("it is one")
}



