import React , {useState , useEffect} from 'react'
import TodoItem from "../TodoItem"

const Todo = () => {
    
    const [toDos, setToDos] = useState([{id:1 , task :"play"},{id:2 , task:"sleep"}]);

    const handlerSubmet=(e)=>{
        e.preventDefault();
            if(e.target.task.value)
            {
                setToDos([...toDos,{id:toDos.length+1 , task:e.target.task.value}])
                e.target.task.value="";

            }

        };

    

    const handleDelete=(id) =>{

    }
    const handleEdit=(id) =>{

    }



    
        return (
            <div className="todo">
                <form onSubmit={handlerSubmet}>
                    <input type="text" name="task"/>
                    <button>Add task</button>
                </form>
                <ul>
                    {toDos.map((item,i)=>(
                    <TodoItem 
                    key={i}
                    name={item.task}
                    id={item.id}
                    />
                    ))}
                </ul>
                
            </div>
        );
    
}
export default Todo;
