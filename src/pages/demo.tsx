import React, {useRef, useState} from 'react';
import {Button} from 'antd';
import {exportPDF} from "../utils";
import {DragOutlined} from "@ant-design/icons";

import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

const Article = () => {
    const [arr, setArr] = useState([1, 2, 3, 4])
    // const [draggable,setDraggable] = useState(false)
    //
    // const [state,setState] = useState([])
    // const handleDragEnter=(e:any,index:number)=>{
    //     console.log('handleDragEnter',index)
    // }
    // const handleDragStart=(e:any,index:number)=>{
    //     console.log('handleDragStart',index)
    // }
    const onDragEnd = (result: any) => {
        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;
        if (sourceIndex === destinationIndex) {
            return;
        }
        const userList = [...arr];
        const [draggedItem] = userList.splice(sourceIndex, 1);
        userList.splice(destinationIndex, 0, draggedItem);
        setArr([...userList])
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='droppable'>
                {(provided:any) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {
                            arr.map((item, index) => (
                                <Draggable key={item+'123'} draggableId={item+'123'} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            className={'bg-green-500'}
                                        >
                                            <DragOutlined {...provided.dragHandleProps} className={'text-lg'}/>
                                            <h1>{item}</h1>
                                        </div>
                                    )}
                                </Draggable>
                            ))
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default Article;