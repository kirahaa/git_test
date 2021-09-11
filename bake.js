var a= {};
var func = function(b){
    b.a = 1;
}
func(a);
console.log(a.a);