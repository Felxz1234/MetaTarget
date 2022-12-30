import React from "react"
import './body.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from "react";
import axios from "axios";

function Body(){

    useEffect(()=>{
        getAllMetas()
    },[])


    const [tasks, setAllTasks] = useState([])

    async function getAllMetas(){
        const response = await axios.get('http://localhost:5000/')
        setAllTasks(response.data)
    }

    const [nome,setNome] = useState('')
    const [tarefa, setTarefa] = useState('')
    const [tempo, setData]= useState('')

    async function handleSubmit(e){

        e.preventDefault()
        
       const response = await axios.post('http://localhost:5000/submit',{
            nome:nome,
            tarefa:tarefa,
            tempo:tempo
        })

        setNome('')
        setTarefa('')
        setData('')

        window.location.reload()

    }

    function handleChangeName(e){
        let value = e.target.value
        setNome(value)
        console.log(nome)

    }

    function handleChangeTask(e){
        let value = e.target.value
        setTarefa(value)
        console.log(value)
    }

    function handleChangedate(e){
        let value = e.target.value
        setData(value)
        console.log(value)
    }

    return(
        <div className="body">
            <div className="adicionar">
               <Card className="carta2" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="titulo">criar meta</Card.Title>
                        <Card.Text>
                        </Card.Text>
                            <form>
                                <textarea onChange={handleChangeTask} name="tarefa" className="meta"></textarea>
                                <input onChange={handleChangeName} name="nome" className="nome" placeholder="nome"></input>
                                <input onChange={handleChangedate} name="tempo" className="data" type={'date'} ></input>
                                <button onClick={handleSubmit} type="submit" className="enviar">enviar</button>
                            </form>
                
                                      
                    </Card.Body>
                 </Card> 
                
            </div>

            <div className="notas">

                {tasks.map((t)=>
                    <Card className="carta" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title className="titu ">{t.nome}</Card.Title>
                            <h3>termine até:</h3>
                            <h3>{t.tempo}</h3>
                            <Card.Text>
                            <textarea>{t.tarefa}</textarea>
                            </Card.Text>
                                <Button className="up ">editar</Button>  
                                <Button className="bb " >deletar</Button> 
                            
                            <div className="f">
                                <Button className="fra ">fracassada</Button>      
                                <Button className="con ">sucesso</Button> 
                            </div>               
                        </Card.Body>
                    </Card>  
                )}

            </div>              
        </div>
    )
}




export default Body