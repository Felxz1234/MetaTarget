
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
    
let submitMeta = (req,res)=>{

    const {nome,tarefa,tempo} = req.body;

    if(!nome || !data || !meta){
        return res.status(400).send('informe os campos necessarios')
    }

    let SQL = `INSERT INTO META VALUES('Default','${nome}','${tarefa}','${tempo}','Default')`

    sql.query(SQL,(error,result)=>{
        if(error){
            console.log(error)
        }else{
           res.send('adicionado')            
        }
    })

}

    
module.exports = {showall,submitMeta}  
