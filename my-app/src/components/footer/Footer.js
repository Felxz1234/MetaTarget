import React from "react"
import './footer.css'


function Footer(){

    return(
        <div className="footer">
            <div className="botons">
                <button className="botao">todos</button>
                <button className="botao andamento">em andamento</button>
                <button className="botao concluidos">concluidos</button>
                <button className="botao fraca">fracassados</button>
            </div>
            
        </div>
    )
}


export default Footer