import React, {useState} from "react";
import Btn,{Texto} from "./componentes"



var Eje1 = () =>{
    var [cont, setCont] = useState(0);

    var val = () =>{
        if (cont === 0) {
            setCont(0)
        } else {
            setCont(cont--)
        }
    }

    return(
        <center>
            <div className="cont animate__animated animate__flipInY">
            <Texto
                cls={"h1"}
                texto={'Ejercicio1'}
            />
            <Texto
                cls={'p'}
                texto={cont}
            />
            <Btn
                cls={'btn btn-success'}
                texto={<i class="bi bi-caret-up-fill"></i>}
                fuc={() => {setCont(cont++)}}
            />
            <Btn
                cls={'btn btn-success'}
                texto={<i class="bi bi-caret-down-fill"></i>}
                fuc={val}
            />
        </div>
        </center>
    )
}

export default Eje1;