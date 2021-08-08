import { useState } from "react"
import Task from "./Task"
import React from "react"
import Taskdone from "./Taskdone"


type TaskData = {
    id: number;
    name: string;
}

type TaskDataDone = {
    name: string;
}


const TodoCard = () => {

    const [tasks, setTasks] = useState<TaskData[]>([])
    const [tasksDone, setTasksDone] = useState<TaskDataDone[]>([])
    const [inputlist, setInputlist] = useState<string>("")



    const resetinput = () => {
        var x = inputlist
        var inputlists = document.querySelector('input')
        if(inputlists != null){
            inputlists.value = ""
        }
        setInputlist("")
    }


    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        var inputlist = document.querySelector('input')
        if (ev.key === 'Enter') {
            if (inputlist?.value == "") {
                alert("task is empty")
            }
            else {
                const newId = (new Date()).getTime()
                const newTasks = [...tasks, { id: newId, name: String(inputlist?.value) }]
                setTasks(newTasks)
                resetinput()
            }
        }
    }

    const deleteTask = (id: number) => {
        const newTasks = tasks.filter(x => x.id !== id)
        setTasks(newTasks)
    }

    const addinput = () => {
        var inputlist = document.querySelector('input')
        if (inputlist?.value == "") {
            alert("task is empty")
        }
        else {
            const newId = (new Date()).getTime()
            const newTasks = [...tasks, { id: newId, name: String(inputlist?.value) }]
            setTasks(newTasks)
            resetinput()
        }
    }

    const doneTask = (id: number, name: string) => {
        const newTasks = tasks.filter(x => x.id !== id)
        setTasks(newTasks)

        const newTasksDone = [...tasksDone, { name: String(name) }]
        setTasksDone(newTasksDone)
    }


    return (

        // {/* todo section */}
        <div className='mx-auto max-w-4xl'>
           {/* task input and add button */}
            <div className='flex space-x-1'>
                <input className='border border-gray-400 w-full text-2xl'
                    onKeyDown={onKeyDownCallback} ></input>
                <button className='border border-gray-400 w-8 font-bold' onClick={addinput}>+</button>
                
            </div>

            <div>
            {tasks.map(x => < Task id={x.id} keyinput={x.name} deleteFn={deleteTask} doneFn={doneTask} />)}
            </div>
            {tasksDone.map(x => < Taskdone doneinput={x.name} />)}
            <div>
                
            </div>

        </div>


            )
}

            export default TodoCard