import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Reducers/todoSlider';

const AddTodo = () =>{
    const dispatch = useDispatch();
    const [state, setState ] = useState({
        content: '',
        contentErr: null
    });
    
    const handleChange = e =>{
        setState({...state,
        [e.target.name]: e.target.value,
        [`${e.target.name}Error`]: null });
    }

    const add = () =>{
        if(content === ''){
            setState({...state,
            contentErr: 'Please add a todo!'});
            return;
        }
        dispatch(addTodo({newContent: content}));
        setState({...state, content: ''});
    }
    const { content, contentErr } = state;

    return <div className='form'>
      <h2>Todo List</h2>
      <input type='text' value={content} 
        name='content' 
        onChange={handleChange}>
      </input>
      <button type='button' className='button' 
        onClick={add}>Add
      </button>
      {contentErr ? 
         <div className='error'>{contentErr}</div>: null}
    </div>;
}

export default AddTodo;