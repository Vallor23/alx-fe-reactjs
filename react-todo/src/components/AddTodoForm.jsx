import { useState } from 'react';
import PropTypes from 'prop-types';

function AddTodoForm({onAddTodo}) {
    // console.log(onAddTodo);//Debug
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('New Todo:', newTodo.trim())//Debug
        
        if(newTodo.trim()) {
        onAddTodo(newTodo.trim());
        setNewTodo('');
    }
};

    return (
        <form onSubmit={handleSubmit}>
            <input
             type="text"
             value={newTodo}
             onChange={(e)=> setNewTodo(e.target.value)}
             placeholder='Add a new Todo' />
             <button type='submit'>Add Todo</button>
        </form>
    )
}

// PropTypes validation
AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired
};
export default AddTodoForm;