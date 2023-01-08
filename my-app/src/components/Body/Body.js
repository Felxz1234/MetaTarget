import React from "react";
import './body.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from "react";
import axios from "axios";
import './footer.css';
import moment from 'moment';

function Body(){

    const [estado,setEstado] = useState('/')

    useEffect(()=>{
        getAllMetas()
    },[])
   

    async function getAllMetas(){
        const response = await axios.get(`http://localhost:5000/`)
        setAllTasks(response.data)
        setEstado('/')
        setCor('blue')

    }

    async function getAllConclu(){
        const response = await axios.get(`http://localhost:5000/realizado`)
        setAllTasks(response.data)
        setEstado('realizado')
        setCor('verde')
    }


    async function getAllAnda(){
        const response = await axios.get(`http://localhost:5000/andamento`)
        setAllTasks(response.data)
        setEstado('andamento')
        setCor('gray')
    }


    async function getAllFraca(){
        const response = await axios.get(`http://localhost:5000/fracassada`)
        setAllTasks(response.data)
        setEstado('fracassada')
        setCor('red')
    }
    
    
    const [nome,setNome] = useState('')
    const [tarefa, setTarefa] = useState('')
    const [tempo, setData]= useState('')
    const [tasks, setAllTasks] = useState([])
    const [cor,setCor] = useState('blue')
    

    async function handleSubmit(e){
        
       const response = await axios.post(`http://localhost:5000/submit`,{
            nome:nome,
            tarefa:tarefa,
            tempo:tempo
        })

        setNome('')
        setTarefa('')
        setData('')

    }

   

    async function deletarTask(id){
        const deleted = await axios.delete(`http://localhost:5000/deleteTask/${id}`)

    }


    async function updateTasks(id){
        const response = await axios.post(`http://localhost:5000/editar/${id}`,{
            nome:nome,
            tarefa:tarefa
        })
    }

    async function handleState(id,realizado){
        const response = await axios.post(`http://localhost:5000/editSituasion/${id}`,{
            estado:realizado
        })
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
                    <Card className={`carta ${cor}`}style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title className=""><input onChange={handleChangeName} className="nombre" name="nome"  placeholder={t.nome}></input></Card.Title>
                            <h3>termine até:</h3>
                            <h3>{moment(t.tempo).utc().format('YYYY-MM-DD')}</h3>
                            <h3>situação:{t.realizado}</h3>
                            <Card.Text>
                            <textarea onChange={handleChangeTask}>{t.tarefa}</textarea>
                            </Card.Text>
                                <form className="form1" onSubmit={()=>updateTasks(t.id)}>
                                   <Button type="submit"  className="up g">editar</Button>  
                                </form>
                                <form className="form1" onSubmit={()=>deletarTask(t.id)}>
                                    <Button name="id" type={'submit'}  className="bb g" >deletar</Button> 
                                </form>                                
                              
                            
                            <div className="f">
                                <form >
                                    <Button onClick={()=>handleState(t.id,'fracassada')} type="submit" className="fra g">fracassada</Button>      
                                    <Button onClick={()=>handleState(t.id,'realizado')} type="submit" className="con g">sucesso</Button> 
                                </form>
                            </div>
                            
                                            
                        </Card.Body>
                         
                    </Card>  
                    
                )}
                 <div className="footer">
                        <div className="botons">
                            <button onClick={getAllMetas}  className="botao">todos</button>
                            <button onClick={getAllAnda}  className="botao andamento">em andamento</button>
                            <button onClick={getAllConclu}  className="botao concluidos">concluidos</button>
                            <button onClick={getAllFraca}  className="botao fraca">fracassados</button>
                        </div>
                  </div> 
            </div>              
        </div>

    )
}




export default Body


