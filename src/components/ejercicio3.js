import React, {useState} from "react";
import Btn,{Texto, Inp} from "./componentes"
import Swal from 'sweetalert2';


var Eje3 = () =>{
    var [datos, setDatos] = useState({});
    var mostrarDatos = (e) =>{
        e.preventDefault();
        const { nombre, apellido, edad } = e.target.elements;
        const newDatos ={
            name: nombre.value,
            last: apellido.value,
            age: edad.value
        }

        setDatos(newDatos);
        console.log(datos);
        Swal.fire(
            'Datos Personales',
            "Nombre:"+nombre.value+" "+
            "Apellido:"+apellido.value+" "+
            "Edad:"+edad.value,
            'success'
          )
    }

    return(
        <div className="card cont2 animate__animated animate__flipInY">
            <Texto
                    texto={'Ejercicio3'}
                    cls={'p'}
                />
            <Texto
                texto={'Datos de Usuario'}
                cls={'p'}
            />
            <form onSubmit={mostrarDatos}>
                <Inp
                    tp={'text'}
                    ph={'ingrese su nombre'}
                    cls={"inp form-control"}
                    name='nombre'
                />
                <Inp
                    tp={'text'}
                    ph={'ingrese su apellido'}
                    cls={"inp form-control"}
                    name='apellido'
                />
                <Inp
                    tp={'number'}
                    ph={'ingrese su edad'}
                    cls={"inp form-control"}
                    name='edad'
                />
                <Btn
                    tp={'submit'}
                    texto={<i class="bi bi-person-fill-add"></i>}
                    cls={'btn btn-success'}
                />
            </form>
        </div>
    )
}

export default Eje3;