import { AiOutlineCheckCircle, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import TaskInterface, { IndivTaskInterface, CircleInterface } from '../interface/Task.interface';
import { saveTaskState } from '../../utils/LocalSaver';
import { useEffect, useState } from 'react';
import '../../assets/css/tasks.css';

const CheckCircle = (prop: CircleInterface) => {
    const [activated, setCircleState] = useState(false);
    useEffect(() => setCircleState(prop.done), []);

    const activateCheckedCircle = function() {
        prop.setTasks((tasks: Array<IndivTaskInterface>) => {
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].id == prop.id) {
                    tasks[i].done = !activated;
                    saveTaskState(prop.username, prop.userkey, tasks);
                    break;
                }
            }

            return tasks;
        });
        setCircleState(circlestate => !circlestate);
    }


    // className for react-icon doesnt work... so for now, i implement this
    const customedStyle = function() {
        return {
            borderRadius: '50%',
            backgroundColor: activated ? 'white' : 'transparent',
            color: activated ? 'green' : 'black'
        }
    }

    return (
        <div className="check-circle" onClick={activateCheckedCircle}>
            <AiOutlineCheckCircle style={customedStyle()}/>
        </div>
    );
}

// individual task summary component
const Tasks = (prop: IndivTaskInterface) => {
    const displayEdittable = function() {
        prop.setTargetID(prop.id);
        prop.setEditMode(true);
        prop.setPreviewMode(true);
    }

    const deleteTask = function() {
        prop.setTasks((tasks: Array<TaskInterface>) => {
            const arrayUpdate = tasks.filter((task: TaskInterface) => task.id != prop.id);
            saveTaskState(prop.username, prop.userkey, arrayUpdate);

            return arrayUpdate;
        });
    }

    return (
        <div className="task">
            <CheckCircle
                id={prop.id}
                done={prop.done}
                setTasks={prop.setTasks}
                username={prop.username}
                userkey={prop.userkey}/>
            <div>
                <h3>{prop.content.split('\n')[0]}</h3>
                <p>{prop.date.toDateString()}</p>
            </div>
            <div className="button-container">
                <AiOutlineEdit onClick={displayEdittable}/>
                <AiOutlineDelete onClick={deleteTask}/>
            </div>
        </div>
    );
}

export default Tasks;