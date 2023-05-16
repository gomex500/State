import React, {useState} from "react";
import Btn,{Texto} from "./componentes"



var Eje5 = () =>{
    const [click, setClick] = useState(false);
    const [texto, setTexto] = useState('Esconder');
    var cambio = () => {
        if (click) {
            setClick(false);
            setTexto('Apareser');
        } else {
            setClick(true);
            setTexto('Esconder');
        }
    }
    return(
        <div className="container cont1">
            <Texto
                texto={'Welcome to App of States'}
                cls={ click ? 'si' : 'no'}
            />
            <Btn
                texto={texto}
                cls={'btn btn-success'}
                fuc={cambio}
            />
        </div>
    )
}

export default Eje5;