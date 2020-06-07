//需求:读取一个文件路径，返回内容
const fs=require("fs")
const path=require("path")



function getFileByPath(fpath,successcallback,errorcallback){
    fs.readFile(fpath,'utf-8',(err,dataStr) =>{ //异步方法
        //如果报错
        if(err) return errcallback(err)
        // console.log(dataStr)
        successcallback(dataStr)
    
    })

}
// var result=getFileByPath(path.join(__dirname,"1.txt"))
// console.log(result)  //undefined

var result=getFileByPath(path.join(__dirname,"1.txt"),
function(data){ console.log("successs")},function(err){console.log("err")}
)

//需求，先读txt1,在读txt2,txt3
//回调地域，使用ES6中的Promise解决这个问题
getFileByPath(path.join(__dirname,"1.txt"),
function(data){ console.log("successs")
getFileByPath(path.join(__dirname,"1.txt"),
function(data){ console.log("successs")
getFileByPath(path.join(__dirname,"1.txt"),
function(data){ console.log("successs")
}
)
}
)
}
)


