import { useState } from "react"

type TaskProps = {
    id: number;
    keyinput: string;
    deleteFn: Function;
    doneFn: Function;
    
}


const Task = ({ id, keyinput, deleteFn, doneFn, }: TaskProps) => {

    const [hover, setHover] = useState<object>({visibility: 'hidden'})




    return (
        <div
            className="flex justify-between h-8 items-center py-6 border-b"
            onMouseEnter={e => {
                setHover({visibility: 'visible'});
            }}
            onMouseLeave={e => {
                setHover({visibility: 'hidden'})
            }}
        >
            <span className="text-2xl"> {keyinput} </span>
            <div className="flex space-x-1 items-center" style={hover} >
                <button className="bg-green-400 w-24 text-2xl"  onClick={() => doneFn(id, keyinput)} >Done</button>
                <button className="bg-red-400 w-24 text-2xl"  onClick={() => deleteFn(id)} >Delete</button>
            </div>
        </div>
    )
}

export default Task

