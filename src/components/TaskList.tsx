import { AiOutlineFileAdd, AiOutlineLogout } from 'react-icons/ai'
import { useState } from 'react';

import TaskInterface from './interface/Task.interface';
import TaskPreview from './TaskPreview';
import Tasks from './Tasks';
import '../assets/css/tasklist-container.css'

const TaskListContainer = () => {
    const [editMode, setEditMode] = useState(false);
    const [tasks, setTasks] = useState([
        {
            key: 0,
            content: 'This is a sample note by me pls uwu',
            date: new Date(),
            done: false
        }
    ]);

    const logout = function() {
        console.log('Logged out');
    }

    // shows and hides the TaskPreview user prompt
    const startEditMode = function() {
        setEditMode(prevValue => !prevValue);
    }

    // adds a new task to the list
    const addNewTask = function(newTask: TaskInterface) {
        setTasks(value => {
            value.push(newTask);
            return value;
        });
    }

    return (
        <div className="tasklist-container">
            <header>
                <h2>TaskerTasks</h2>
                <div className='button-container'>
                    <AiOutlineFileAdd onClick={startEditMode}/>
                    <AiOutlineLogout onClick={logout}/>
                </div>
            </header>

            {/* task state checker part */}
            { editMode
                ? <TaskPreview
                    currentTaskLength={tasks.length}
                    addTaskCallback={addNewTask}
                    backCallback={startEditMode}/>
                : <div className='scrollable'>
                    {
                        (tasks.length > 0)
                        ? tasks.map((task: TaskInterface) => <Tasks key={task.key} content={task.content} done={task.done} date={task.date}/>)
                        : <h4 className='comment'>No tasks yet</h4>
                    }
                </div>
            }
        </div>
    );
};

export default TaskListContainer;