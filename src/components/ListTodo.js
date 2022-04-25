import React, { useState } from 'react';
import { AiFillEdit, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from '../Reducers/todoSlider';

const ListTodo = () =>{
    const { todoList } = useSelector((state)=>state.todo);
    const dispatch =useDispatch();
    const [ isEditing, setEditing ] = useState(false);
    const [ state, setState ] = useState({
        id: '', content: '', contentErr: null
    });

    const onEditToggle = ( id, content) => {
        setEditing(true);
        setState({ ...state, id, content});
    }


    const handleChange = (e) =>{
        setState({...state, [e.target.name]: e.target.value,  
           [`${e.target.name}Error`]: null });
    }

    const { content, contentErr, id } = state;

    const edit = () =>{
        if(content === ''){
            setState({...state, contentErr: 'Please add a todo!'});
            return;
        }
        dispatch((editTodo({content, id})));
        setEditing(false);
    }
    return <div>
        {
            isEditing ? 
            <div className='form'>
                <h2>Todo List</h2>
                <input type='text' value={content} name='content' 
                onChange={handleChange}>
                </input>
                <button type='button' className='button' 
                onClick={edit}>Edit
                </button>
                {contentErr ? 
                <div className='error'>{contentErr}</div>: null }
            </div>:
            <ul className='todos'>
            {
              todoList.map(({id, content})=> {
                return <li className='grid' key={id}>
                  <span className='content'>{content}</span>
                  <span className='todo-action'>  
                    <AiOutlineCloseCircle className="close" 
                      onClick={() => dispatch(deleteTodo({id}))}
                    />
                    <AiFillEdit className="edit" 
                      onClick={() =>onEditToggle(id, content)} 
                    />
                  </span>
               </li>
             })
            }
          </ul>
        }
    </div>
}

export default ListTodo;