import React , {useState , useEffect} from 'react'
import TodoItem from "../TodoItem"
import "./style.css"

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

    

    const handleDelete=(i) =>{
        let todoFilter= toDos.filter(item=>item.id !=i);
        setToDos(todoFilter);


    }
    const handleEdit=(i) =>{
        let newtask = prompt("Edit this task:");
        let todoMap = toDos.map(item => {
            if(i === item.id){
                return {...item, task:newtask}
            }else{
                return item;

            }
        })
            
        setToDos(todoMap);

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
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    />
                    ))}
                </ul>
                
            </div>
        );
    
}
export default Todo;
