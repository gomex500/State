import React, {useState} from "react";
import Btn,{Texto, Inp} from "./componentes"



var Eje2 = () =>{
    var [datos, setDatos] = useState(['']);
    var [dato, setDato] = useState('');
    var agregar = () =>{
        setDatos([...datos, dato])
        setDato('');
    }

    return(
        <div className="container">
            <div className="row justify-content-md-center animate__animated animate__backInDown">
           <div className="col-12 col-lg-6 cont1">
                <Texto
                    texto={'Ejercicio2'}
                    cls={'p2'}
                />
                <Inp
                    tp={'text'}
                    ph={'Ingrese texto'}
                    cls={'form-control'}
                    val={dato}
                    fuc={(e) => setDato(e.target.value)}
                />
                <Btn
                    texto={"agregar"}
                    cls={'btn btn-success'}
                    fuc={agregar}
                />
           </div>
           <div className=" col-12 col-lg-6 cont1">
           {datos.map((item, index) =>
               <Texto
                    key={index}
                    texto={item}
                    cls={'p2 animate__animated animate__heartBeat'}
               />
           )}
           </div>
        </div>
        </div>
    )
}

export default Eje2;