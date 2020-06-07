const fs=require("fs")
function getFile(fpath){
    var promise=new Promise(function(resolve,reject){
        fs.readFile(fpath,'utf-8',(err,datastr)=>{
            // if(err) throw err
            // console.log(datastr)
            if(err) return reject(err)
            resolve(datastr)
        })
    })
    return promise
    

}
//成功的回调必须传，失败的可以不传
getFile("1.txt").then(function(data){
    console.log(data)
})



getFile("1.txt").then(function(data){
    console.log(data)
    return getFile("2.txt")  //牛叉
},function(err){console.log("fail")
return getFile("2.txt") 
}).then(function(data){
    console.log(data)
    return getFile("3.txt")
}).then(function(data){
    console.log(data)
})
console.log("ok")
