const mysql = require("mysql");
const Promise = require("bluebird");
//const { promisifyAll } = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "pgdac",
    password: "cdac",
    database: "project_exam",
};

async function connectionCheck(){
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("connection success......");


    await connection.endAsync();

}




async function adduser(message1){
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    
    let sql="insert into  message1(user_a, user_b) values (?,?)";
    await connection.queryAsync(sql,[message1.user_a, message1.user_b]);

    console.log("user added ......");

   //const list = await connection.queryAsync(sql,[]);
    await connection.endAsync();
    //console.log(list);
    //return list;


}

async function selectuser(){
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("user displyed ......");

    let sql = `SELECT * from message1`;
    
    const list = await connection.queryAsync(sql,[]);
    await connection.endAsync();
    console.log(list);
    return list;

}

//connectionCheck();
const user11 = {user_a:'hi there',user_b:'how are you'}
//const user11 = {user_a:'hello',user_b:'hellow everyone'}

adduser(user11);
selectuser();
module.exports = {selectuser,adduser};
