import React from "react"
import './body.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import api from "../../services/api";
import { useState,useEffect } from "react";
import axios from "axios";

function Body(){

    useEffect(()=>{
        getAllMetas()
    },[])

    async function getAllMetas(){

        const response = await axios.get('http://localhost:5000/')

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
                        <Card.Title className="titu">criar meta</Card.Title>
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
               {/* <Card className="carta" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="titu">criar meta</Card.Title>
                        <Card.Text>
                           <textarea ></textarea>
                        </Card.Text>
                        <Button></Button>      
                        <Button></Button>  
                        <Button></Button>  
                        <Button></Button>                  
                    </Card.Body>
                 </Card>   */}
            </div>              
        </div>
    )
}




export default Body