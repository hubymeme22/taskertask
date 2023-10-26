import TaskInterface from "./Task.interface";

export default interface TaskPreviewInterface {
    editMode: boolean,
    latestID: number,
    targetID: number,
    tasks: Array<TaskInterface>,
    setTasks: CallableFunction,
    setLatestID: CallableFunction,
    setPreviewMode: CallableFunction,
    setEditMode: CallableFunction,
}