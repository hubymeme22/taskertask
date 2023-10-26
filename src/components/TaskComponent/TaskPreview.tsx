import TaskPreviewInterface from '../interface/TaskPreview.interface';
import TaskInterface from '../interface/Task.interface';
import { useEffect, useState } from 'react';
import '../../assets/css/taskpreview.css'

// changes the task to editting preview mode
const TaskPreview = (prop: TaskPreviewInterface) => {
    const [taskContent, setTaskContent] = useState('');
    const [dateContent, setDateContent] = useState(new Date());

    useEffect(() => {
        if (!prop.editMode) return;
        setTaskContent(prop.tasks[prop.targetID].content);
        setDateContent(prop.tasks[prop.targetID].date);
    }, []);

    // retrieves the date to formatted string value
    const getDateString = function(date: Date) {
        return `${date.getFullYear()}-${date.getMonth() < 9 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1)}-${date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate()}`;
    }

    // updates the valiue of the current task
    const updateTaskContent = function(event: any) {
        setTaskContent(event.target.value);
    }

    // updates the date when new date is assigned from input
    const updateDateContent = function(event: any) {
        setDateContent(new Date(event.target.value));
    }

    // saves the current task to the list
    const saveTask = function() {
        prop.setTasks((tasklist: Array<TaskInterface>) => {
            tasklist.push({
                id: prop.latestID + 1,
                content: taskContent,
                date: dateContent,
                done: false,
            });

            return tasklist;
        });

        prop.setLatestID(prop.latestID + 1);
        prop.setEditMode(false);
        prop.setPreviewMode(false);
    }

    // edits the current task id
    const editTask = function() {
        prop.setTasks((taskList: Array<TaskInterface>) => {
            taskList[prop.targetID] = {
                id: prop.targetID,
                content: taskContent,
                date: dateContent,
                done: taskList[prop.latestID].done,
            }

            return taskList;
        });

        prop.setEditMode(false);
        prop.setPreviewMode(false);
    }

    return (
        <div className="task-preview">
            <span>
                <label>Assign Date: </label>
                <input onChange={updateDateContent} value={getDateString(dateContent)} type="date"/>
            </span>
            <textarea onChange={updateTaskContent} value={taskContent} placeholder='Enter task content here...' rows={10} required></textarea>
            <div className="button-container">
                <button onClick={prop.editMode ? editTask : saveTask} className="add">{prop.editMode ? 'Edit' : 'Save'}</button>
                <button onClick={() => prop.setPreviewMode(false) || prop.setEditMode(false)} className="cancel">Cancel</button>
            </div>
        </div>
    );
}

export default TaskPreview;