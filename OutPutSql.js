"use strict"

var fs = require('fs')
var mysql = require('mysql')
var compare = require('./lib/json_compare')


var connection = mysql.createConnection({
    host: "10.235.166.184",
    user: "root",
    password: "root",
    database: "temp_wd"
});
/**
 * 读取数据库中的对象,并保存到输出文件中.
 */
var createDirCallBack= function(err){
    if(err) throw err
    console.log("创建目录成功!")
}

var saveRowTo
connection.connect();
connection.query("select * from demo_1", function(err,rows,fields) {
    if(err) throw err;
    /*fields.forEach(function(field){
        console.log(field)
    })*/

    fs.exists("data",function(result){
        console.log(result)
        if(!result){
            fs.mkdir("data",createDirCallBack);
        }
        rows.forEach(function(row){

            fs.appendFile("data/rs.txt", row.id+"\n",function(err){
                if(err) throw err;
                //console.log("save one line!")
            });
            //console.log(row);
        })

    })

});
connection.end();

var json1="{\"a\":\"1\",\"b\":\"2\",\"data\":[\"a\",\"b\",\"c\"]}";
var json2="{\"b\":\"2\",\"a\":\"1\",\"data\":[\"b\",\"a\",\"c\"]}";
var result = JSON.parse(json1) === JSON.parse(json2);
console.log("xxxx:"+result)
console.log("dddd:"+new compare("Json Compare").deepCompare( JSON.parse(json1),JSON.parse(json2)));


