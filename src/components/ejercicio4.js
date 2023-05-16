import React, {useState} from "react";
import Btn,{Texto, Inp} from "./componentes"
import Swal from 'sweetalert2';


var Eje4 = () =>{
    var [tasks, setTasks] = useState([]);
    var [newTask, setNewTask] = useState({
        titulo: '',
        des: '',
    });

    var addTask = (e) =>{
        e.preventDefault();
        const newtareas = {
            id: tasks.length + 1,
            titulo: newTask.titulo,
            des: newTask.des,
            completed: false
        };

        setTasks([...tasks, newtareas]);
            setNewTask({
            titulo: '',
            des: ''
        });
        Swal.fire(
            'Tarea Agreagada',
            'con exito',
            'success'
          )
    }

    var eliminar = (taskId) => {
        const upTareas = tasks.filter((task) => task.id !== taskId);
        setTasks(upTareas);
      };

    return(
        <div className="container cont1">
            <Texto
                cls={"p2"}
                texto={'Ejercicio4'}
            />
            <div className="row justify-content-md-center animate__animated animate__backInDown">
                <div className="col-12 col-lg-6 cont1">
                    <form onSubmit={addTask}>
                        <Inp
                        tp="text"
                        val={newTask.titulo}
                        fuc={(event) =>
                            setNewTask({ ...newTask, titulo: event.target.value })
                        }
                        cls='form-control inp'
                        ph="Ingrese el título de la tarea"
                        />
                        <textarea
                        value={newTask.des}
                        onChange={(event) =>
                            setNewTask({ ...newTask, des: event.target.value })
                        }
                        placeholder="Ingrese la descripción de la tarea"
                        className="form-control"
                        ></textarea>
                        <Btn 
                            tp="submit"
                            texto={<i class="bi bi-plus-circle-fill"></i>}
                            cls='btn btn-success'
                        />
                    </form>
                </div>
                <diV className="col-12 col-lg-6 cont1">
                    {tasks.map((task) => (
                    <div key={task.id} className='cont3'>
                        <h3>{task.titulo}</h3>
                        <p>{task.des}</p>
                        <Btn
                            fuc={() => eliminar(task.id)}
                            texto={<i class="bi bi-trash3-fill"></i>}
                            cls={'btn btn-danger'}
                        />
                    </div>
                    ))}
                </diV>
            </div>
        </div>
    )
}

export default Eje4;