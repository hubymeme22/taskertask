interface TaskInterface {
    id: number,
    content: string,
    done: boolean,
    date: Date,
}

// for individual task components
export interface IndivTaskInterface extends TaskInterface {
    setPreviewMode: CallableFunction,
    setEditMode: CallableFunction,
    setTargetID: CallableFunction
}

export default TaskInterface;