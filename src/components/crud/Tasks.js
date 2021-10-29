import Task from './Task';
import './crud.css';

const Tasks = ({ tasks, onDelete, onEdit }) => {
    return (
        <div className="buildings">
            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />))}
        </div>
    )
}

export default Tasks;
