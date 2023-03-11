function Foo(){
    this.me = 'FOO'
}
Foo.prototype.a= 10
console.log(Foo.a)
let b = new Foo()
let c = new Foo()
b.me = '11'
console.log(b.me,b.a,c.me,b.constructor==Foo.prototype.constructor)