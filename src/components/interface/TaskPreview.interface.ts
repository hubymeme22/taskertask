import TaskInterface from "./Task.interface";

export default interface TaskPreviewInterface {
    editMode: boolean,
    latestID: number,
    targetID: number,
    username: string,
    userkey : string,
    tasks: Array<TaskInterface>,
    setTasks: CallableFunction,
    setLatestID: CallableFunction,
    setPreviewMode: CallableFunction,
    setEditMode: CallableFunction,
}