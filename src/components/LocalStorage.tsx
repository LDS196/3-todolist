import React, {useState} from 'react';

const LocalStorage = () => {
    type tasksType = {
        id: number,
        title: string,
    }

    type CustomType = tasksType & {
        isDone: boolean
    }

    const [currentTasks, setCurrentTasks] = useState<CustomType[]>([])
    const tasks: CustomType[] = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ]

    const saveTodo = () => {
        const stateAsString = JSON.stringify(tasks)
        localStorage.setItem('tasksKey', stateAsString)
    }
    const onExtractTodo = () => {
        const stateAsString = localStorage.getItem('tasksKey')
        if (stateAsString !== null) {
            setCurrentTasks(JSON.parse(stateAsString))
        }

    }

    const removeTasks = () => {
        localStorage.removeItem('tasksKey')
        setCurrentTasks([])
    }
    return (
        <div>
            <button onClick={saveTodo}>Save</button>
            <button onClick={onExtractTodo}>Extract</button>
            <button onClick={removeTasks}>Delete</button>
            <ul>

                {currentTasks.length
                    ? tasks.map(el => {
                        return <li>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <input type={"checkbox"} checked={el.isDone}/>
                        </li>
                    })
                    : <div></div>
                }
            </ul>

        </div>
    );
};

export default LocalStorage;