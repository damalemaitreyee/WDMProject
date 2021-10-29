import { useState } from 'react';
import Swal from "sweetalert2";

const AddTask = ({ onSave }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text && !day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your task and date or close the form!'
            })
        } else if (!text && day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your task!'
            })
        } else if (text && !day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your date!'
            })
        } else {
            onSave({ text, day });
        }

        setText('');
        setDay('');
    }

    return (
        <div className="buildings">
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Building Name</label>
                <input type="text" placeholder="add building Name" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Building Number</label>
                <input type="text" placeholder="Building Number" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>

            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
        </div>
    )
}

export default AddTask
