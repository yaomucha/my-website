import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Task from "./task";
import styles from "./index.module.css"
import { useEffect, useState } from "react";

export default function Column() {
    const [list, setList] = useState([])

    useEffect(() => {
        fetch("/api/mycTab/getList")
            .then(res => res.json())
            .then(res => setList(res.data))
    }, [])

    return (
        <DragDropContext
        >
            <ul key="column-1">
                <Droppable droppableId="column-1" direction="horizontal">
                    {provided =>
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={styles.all_grid}
                        >
                            {list.map((task, index) => (
                                <Task key={task.id} task={task} index={index} />
                            ))}
                            {provided.placeholder}
                        </div>
                    }
                </Droppable>
            </ul>
        </DragDropContext>

    )
}