

let obj = {
    count:3
}
let proxy = new Proxy(obj,{
    get:function(target,prop){
        return target[prop]
    },
    set:function(target,prop,val){
        console.log('change')
        target[prop]=val
    }
})
proxy.count = 4
console.log(proxy);
proxy.x = 2
console.log(proxy);

let map = new Map()
let proxyMap = new Proxy(map,{
    get:function(key){
        console.log(map)
        console.log('get',map.get(key))
        return map.get(key)
    },
    set:function(key,val){
        console.log('set',key+val)
        map.set(key,val)
    }
})
proxyMap.a = 3
console.log(map)
