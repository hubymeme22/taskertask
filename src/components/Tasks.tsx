import { AiOutlineCheckCircle, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import TaskInterface from './interface/Task.interface';
import '../assets/css/tasks.css'
import { useState } from 'react';

const CheckCircle = (prop: object) => {
    const [activated, setCircleState] = useState(false);
    const activateCheckedCircle = function() {
        setCircleState(status => !status);
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

const Tasks = (prop: TaskInterface) => {
    return (
        <div className="task">
            <CheckCircle/>
            <div>
                <h3>{prop.content.split('\n')[0]}</h3>
                <p>{prop.date.toDateString()}</p>
            </div>
            <div className="button-container">
                <AiOutlineEdit/>
                <AiOutlineDelete/>
            </div>
        </div>
    );
}

export default Tasks;