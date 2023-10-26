import { AiOutlineCheckCircle, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { IndivTaskInterface } from './interface/Task.interface';
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

// individual task summary component
const Tasks = (prop: IndivTaskInterface) => {
    const displayEdittable = function() {
        prop.setTargetID(prop.id);
        prop.setEditMode(true);
        prop.setPreviewMode(true);
    }

    return (
        <div className="task">
            <CheckCircle/>
            <div>
                <h3>{prop.content.split('\n')[0]}</h3>
                <p>{prop.date.toDateString()}</p>
            </div>
            <div className="button-container">
                <AiOutlineEdit onClick={displayEdittable}/>
                <AiOutlineDelete/>
            </div>
        </div>
    );
}

export default Tasks;