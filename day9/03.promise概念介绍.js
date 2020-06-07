// 1，Promise是一个构造函数，可以创建实例对象
// 其中，reject：失败后的回调 ,resolve:成功后的回调
// 在prototype的.then方法，
// 如果Promise表示异步操作，一个对象就表示具体的异步操作
// 内部拿到结果后，无法使用return返回给调用者，这能通过回调函数吧结果返回调用者



// 我们剋在实例对象上，调用.then 预先指定成功和失败的回调函数


// var promise=new Promise()  //形式上的异步操作
// var promise=new Promise(function(){
//     //内部是具体的异步操作
// })
const fs=require("fs")
var promise=new Promise(function(){
    fs.readFile('text2','utf-8',(err,datastr)=>{
        if(err) throw err
        console.log(datastr)
    })
})
//

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


var p=getFile("2.txt")
p.then(function(data){console.log(date+"---")},function(err){console.log(err.message)})