var a= {};
var func = function(b){
    b.a = 1;
    console.log(b);
}
func(a);
console.log(a.a);