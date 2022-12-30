
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

let showafailed = (req,res)=>{
    let SQL = "SELECT *FROM meta WHERE realizado = 'fracassada'"

    sql.query(SQL,(error,result)=>{
        if(error){
            console.log(error)
        }else{
            res.send(result)
        }
    })
}


let showaAndamento = (req,res)=>{
    let SQL = "SELECT *FROM meta WHERE realizado = 'andamento'"

    sql.query(SQL,(error,result)=>{
        if(error){
            console.log(error)
        }else{
            res.send(result)
        }
    })
}
    

let showaSuccess = (req,res)=>{
    let SQL = "SELECT *FROM meta WHERE realizado = 'realizado'"

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

let editar = (req,res)=>{

    let nome = req.body.nome
    let tarefa = req.body.tarefa
    const id = req.params.id

    let SQL = `update meta
    set nome =? , tarefa = ?
    where id =?`

    sql.query(SQL,[nome,tarefa,id],(error)=>{
        if(error){
            console.log(error)
        }
    })

}

let editState = (req,res)=>{

    let id = req.params.id

    let estado = req.body.estado

    
    let SQL = `update meta
    set realizado =? 
    where id =?`

    sql.query(SQL,[estado,id],(error)=>{
        if(error){
            console.log(error)
        }
    }) 
}
    
module.exports = {showall,submitMeta,deleteTask,editar,editState,showaSuccess,showafailed,showaAndamento}  
