import { AiOutlineFileAdd, AiOutlineLogout } from 'react-icons/ai'
import { useState } from 'react';

import TaskInterface from './interface/Task.interface';
import TaskPreview from './TaskPreview';
import Tasks from './Tasks';
import '../assets/css/tasklist-container.css'

const TaskListContainer = () => {
    const [latestID, setLatestID] = useState(-1);
    const [targetID, setTargetID] = useState(-1);

    const [editMode, setEditMode] = useState(false);
    const [previewMode, setPreviewMode] = useState(false);
    const [tasks, setTasks] = useState(Array<TaskInterface>());

    return (
        <div className="tasklist-container">
            <header>
                <h2>TaskerTasks</h2>
                <div className='button-container'>
                    <AiOutlineFileAdd onClick={() => {
                        setPreviewMode(preview => !preview);
                        setEditMode(false)}}/>
                    <AiOutlineLogout/>
                </div>
            </header>

            {/* task state checker part */}
            { (previewMode)
                ? <TaskPreview
                    latestID={latestID}
                    targetID={targetID}
                    editMode={editMode}
                    tasks={tasks}
                    setTasks={setTasks}
                    setLatestID={setLatestID}
                    setPreviewMode={setPreviewMode}
                    setEditMode={setEditMode}/>

                : <div className='scrollable'>
                    {
                        (tasks.length > 0)
                        ? tasks.map((task: TaskInterface) => {
                            return (
                                <Tasks
                                    key={task.id}
                                    id={task.id}
                                    content={task.content}
                                    date={task.date}
                                    done={task.done}
                                    setEditMode={setEditMode}
                                    setPreviewMode={setPreviewMode}
                                    setTargetID={setTargetID}/>
                            )
                        })
                        : <h4 className='comment' key={-1}>No tasks yet</h4>
                    }
                </div>
            }
        </div>
    );
};

export default TaskListContainer;