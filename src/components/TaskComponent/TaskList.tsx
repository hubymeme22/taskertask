import { AiOutlineFileAdd, AiOutlineLogout } from 'react-icons/ai'
import { useEffect, useState } from 'react';

import { authenticateUser } from '../../utils/LocalSaver';
import TaskListInterface from '../interface/TaskList.interface';
import TaskInterface from '../interface/Task.interface';
import TaskPreview from './TaskPreview';
import Tasks from './Tasks';
import '../../assets/css/tasklist-container.css';

const TaskListContainer = (prop: TaskListInterface) => {
    const [latestID, setLatestID] = useState(-1);
    const [targetID, setTargetID] = useState(-1);

    const [editMode, setEditMode] = useState(false);
    const [previewMode, setPreviewMode] = useState(false);
    const [tasks, setTasks] = useState(Array<TaskInterface>());

    // load the localstorage value and parse the date values
    useEffect(() => {
        const response = authenticateUser(prop.username, prop.userkey);
        for (let i = 0; i < response.userdata.length; i++)
            response.userdata[i].date = new Date(response.userdata[i].date);
        setTasks(response.userdata);
    }, []);

    return (
        <div className="tasklist-container">
            <header>
                <h2>TaskerTasks</h2>
                <div className='button-container'>
                    <AiOutlineFileAdd onClick={() => {
                        setPreviewMode(preview => !preview);
                        setEditMode(false)}}/>
                    <AiOutlineLogout onClick={() => {
                        prop.setGlobalUsername('');
                        prop.setGlobalUserkey('');
                    }}/>
                </div>
            </header>

            {/* task state checker part */}
            { (previewMode)
                ? <TaskPreview
                    latestID={latestID}
                    targetID={targetID}
                    editMode={editMode}
                    tasks={tasks}
                    username={prop.username}
                    userkey={prop.userkey}
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
                                    username={prop.username}
                                    userkey={prop.userkey}
                                    setEditMode={setEditMode}
                                    setPreviewMode={setPreviewMode}
                                    setTargetID={setTargetID}
                                    setTasks={setTasks}/>
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