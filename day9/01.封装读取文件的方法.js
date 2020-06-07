//需求:读取一个文件路径，返回内容
const fs=require("fs")
const path=require("path")
fs.readFile(path.join(__dirname,"1.txt"),'utf-8',(err,dataStr) =>{
    if(err) throw err
    console.log(dataStr)

})

//自己封装方法
function getFileByPath(fpath,callback){
    fs.readFile(fpath,'utf-8',(err,dataStr) =>{ //异步方法
        //如果报错
        if(err) return callback(err)
        // console.log(dataStr)
        callback(dataStr)
    
    })

}
// var result=getFileByPath(path.join(__dirname,"1.txt"))
// console.log(result)  //undefined

var result=getFileByPath(path.join(__dirname,"1.txt"),(err,datestr)=>{
    if(err) return console.log(err.message)
    console.log(dataStr+'----')
})