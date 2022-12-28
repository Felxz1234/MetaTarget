
const sql = require('../dbconfig')


let showall = (req,res)=>{
    let SQL = "SELECT *FROM meta"

    sql.query(SQL,(error,result)=>{
        if(error){
            console.log(error)
        }else{
            res.send(result)
        }
    })
}
    
    
module.exports = {showall}  
