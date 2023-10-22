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
            content: 'This is a sample note by me pls uwu',
            date: new Date(),
            done: false
        }
    ]);

    const logout = function() {
        console.log('Logged out');
    }

    const startEditMode = function() {
        setEditMode(prevValue => !prevValue);
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
            { editMode ? <TaskPreview backCallback={startEditMode}/> :
                <div className='scrollable'>
                    {
                        (tasks.length > 0)
                        ? tasks.map((task: TaskInterface) => <Tasks content={task.content} done={task.done} date={task.date}/>)
                        : <h4 className='comment'>No tasks yet</h4>
                    }
                </div>
            }
        </div>
    );
};

export default TaskListContainer;