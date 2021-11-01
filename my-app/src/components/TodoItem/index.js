import React from 'react'

const TodoItem =(props) => {
    
        return (
            <div className="todoitem">
                <li>
                    <h2>{props.name}</h2>
                    <h2 className="delete" onClick={()=> props.handleDelete(props.key)}>x</h2>
                    <h2 className="edit" onClick={()=> props.handleEdit(props.key)}>Edit</h2>
                    </li>
                
            </div>
        )
    
}
export default  TodoItem;
