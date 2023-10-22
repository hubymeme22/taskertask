import TaskPreviewInterface from './interface/TaskPreview.interface';
import '../assets/css/taskpreview.css'

// changes the task to editting preview mode
const TaskPreview = (props: TaskPreviewInterface) => {
    return (
        <div className="task-preview">
            <span>
                <label>Assign Date: </label>
                <input type="date" />
            </span>
            <textarea placeholder='Enter task content here...' rows={10}></textarea>
            <div className="button-container">
                <button className="add">Add</button>
                <button className="cancel" onClick={() => props.backCallback()}>Cancel</button>
            </div>
        </div>
    );
}

export default TaskPreview;