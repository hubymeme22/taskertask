import { useEffect, useState } from "react";
import * as localSaver from "./utils/LocalSaver";
import TaskListContainer from "./components/TaskComponent/TaskList"
import LoginPanel from "./components/LoginComponent/LoginPanel";

const App = () => {
    const [username, setUsername] = useState('');
    const [key, setKey] = useState('');

    // always check to initialize local storage
    useEffect(() => localSaver.initializeLocalDB(), []);

    return (
        <div className="root">
            {
                ((username != '') || (key != ''))
                ? <TaskListContainer setGlobalUserkey={setKey} setGlobalUsername={setUsername} username={username} userkey={key}/>
                : <LoginPanel setUsername={setUsername} setKey={setKey}/>
            }
        </div>
    );
}

export default App
