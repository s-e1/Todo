import { useState } from "react";
import './AddTodo.css';

const AddTodo = ({ selectedId, closeAddTodo, saveTodo }) => {
    const [todo, setTodo] = useState({ userId: selectedId, completed: false });
    const savingTodo = (e) => {
        e.preventDefault();
        saveTodo(todo);
        closeAddTodo();
    }

    return (
        <form style={{ border: '2px solid black' }} onSubmit={savingTodo}>
            <div>New Todo - User {selectedId}</div>
            <div >
                <label>Title:
                    <input onChange={(e) => setTodo({ ...todo, title: e.target.value })} required />
                </label>

                <div className="spread" >
                    <button type="button" onClick={closeAddTodo}>Cancel</button>
                    <button>Add</button>
                </div>
            </div>
        </form>
    )
}
export default AddTodo;