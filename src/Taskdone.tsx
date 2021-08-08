
type TaskDoneProps = {
    doneinput: string;
}

const TaskDone = ({ doneinput }: TaskDoneProps) => {
    return (
        <div
            className="flex justify-between h-8 items-center py-6 border-b"
        >
            <span className="text-2xl line-through"> {doneinput} </span>
        </div>
    )
}

export default TaskDone