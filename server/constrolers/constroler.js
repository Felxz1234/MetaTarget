
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
    
 let  submitMeta = (req,res)=>{

    if(!req.body.nome || !req.body.tempo|| !req.body.tarefa){
        return res.status(400).send('informe os campos necessarios')
    }

    let SQL = `INSERT INTO meta VALUES(default,?,?,?,default)`

    sql.query(SQL,[req.body.nome,req.body.tarefa,req.body.tempo],(error,result)=>{
        if(error){
            console.log(error)
        }
    })

}


let deleteTask = (req,res)=>{

    const id = req.params.id

    console.log(id)

    let SQL = `DELETE FROM meta WHERE id = ?`

    sql.query(SQL,[id],(res,error)=>{
        if(error){
            console.log(error)
        }else{
            console.log('deletado')
        }
    })
    
}

    
module.exports = {showall,submitMeta,deleteTask}  
