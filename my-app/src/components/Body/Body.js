import React from "react"
import './body.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState } from "react";

function Body(){

    const [nome,setNome] = useState('')
    const [tarefa, setTarefa] = useState('')
    const [data, setData]= useState(null)

    function handleChangeSubmit(){

    }



    return(
        <div className="body">
            <div className="adicionar">
               <Card className="carta2" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="titu">criar meta</Card.Title>
                        <Card.Text>
                           <textarea name="nome" className="meta"></textarea>
                        </Card.Text>
                         <form onSubmit={handleChangeSubmit}>
                            <input onChange={} name="tarefa" className="nome" placeholder="nome"></input>
                            <input name="tempo" className="data" type={'date'} ></input>
                            <button className="enviar">enviar</button>
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