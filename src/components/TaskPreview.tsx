import TaskPreviewInterface from './interface/TaskPreview.interface';
import { useState } from 'react';
import '../assets/css/taskpreview.css'

// changes the task to editting preview mode
const TaskPreview = (props: TaskPreviewInterface) => {
    const [taskContent, setTaskContent] = useState('');
    const [dateContent, setDateContent] = useState(new Date());

    const getDateString = function(date: Date) {
        return `${date.getFullYear()}-${date.getMonth() < 9 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1)}-${date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate()}`;
    }

    const updateTaskContent = function(event: any) {
        setTaskContent(event.target.value);
    }

    const updateDateContent = function(event: any) {
        setDateContent(new Date(event.target.value));
    }

    const addNewTask = () => {
        props.addTaskCallback({
            key: props.currentTaskLength,
            content: taskContent,
            date: dateContent,
            done: false
        })

        setTaskContent('');
        setDateContent(new Date());
        props.backCallback();
    }

    return (
        <div className="task-preview">
            <span>
                <label>Assign Date: </label>
                <input onChange={updateDateContent} value={getDateString(dateContent)} type="date"/>
            </span>
            <textarea onChange={updateTaskContent} value={taskContent} placeholder='Enter task content here...' rows={10}></textarea>
            <div className="button-container">
                <button className="add" onClick={addNewTask}>Add</button>
                <button className="cancel" onClick={() => props.backCallback()}>Cancel</button>
            </div>
        </div>
    );
}

export default TaskPreview;