import {DeleteOutlined, DownloadOutlined, DragOutlined, FieldTimeOutlined, PlusOutlined} from "@ant-design/icons";
import {DEFAULT_DATA, DEFAULT_MODULE_DISPLAY, DEFAULT_TITLE} from "../constants/default";
import {useSetState} from "ahooks";
import BaseInfo from "../components/basicInfo";
import Other from "../components/other";
import Experience from "../components/experience";
import './index.css'
import React, {useEffect, useRef, useState} from "react";
import _ from "lodash";
import Title from "../components/title";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import {Button, Tooltip} from "antd";
import {exportPDF} from "../utils";

export default function HomePage() {
    const [data, setData] = useSetState(DEFAULT_DATA)
    const [module, setModule] = useState(DEFAULT_MODULE_DISPLAY)
    //让显示的模块拥有顺序
    const [blockModule, setBlockModule] = useState([])
    //默认标题
    const titleArr = DEFAULT_TITLE
    useEffect(() => {
        let arr: any = []
        Object.keys(module).map((item) => {
            if (module[item]) arr.push(item)
        })
        setBlockModule(_.cloneDeep(arr))
    }, [])

    // useEffect(() => {
    //     console.log(module)
    //     console.log(blockModule)
    // }, [module, blockModule])

    //删除模块 （并让模块用）
    const handleDelModule = (item: string, index: number) => {
        const arr = _.cloneDeep(blockModule)
        arr.splice(index, 1)
        setBlockModule(_.cloneDeep(arr))
        handleChangeModule(item, true)
    }

    //控制模块内部的显示
    const handleChangeModule = (item: string, isDel = false) => {
        const obj = _.cloneDeep(module)
        if (isDel) {
            obj[item] = false
        } else {
            obj[item] = true
        }
        setModule(_.cloneDeep(obj))
    }

    //新增模块
    const handleAddModule = (item: string) => {
        const arr = _.cloneDeep(blockModule)
        arr.push(item)
        setBlockModule(_.cloneDeep(arr))
        handleChangeModule(item)
    }


    //导出
    const pdfRef = useRef(null)

    const onExportPDF = async () => {
        await exportPDF('测试导出PDF', pdfRef.current)
    }

    //拖拽
    const onDragEnd = (result: any) => {
        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;
        if (sourceIndex === destinationIndex) {
            return;
        }
        const userList = _.cloneDeep(blockModule);
        const [draggedItem] = userList.splice(sourceIndex, 1);
        userList.splice(destinationIndex, 0, draggedItem);
        setBlockModule(_.cloneDeep(userList))
    }
    return (
        <div className='index'>
            <div className='header'>
                <div className='header-left'>
                    <div>我的我的</div>
                    <div className='header-time'>
                        <FieldTimeOutlined className='mr-1'/>
                        <span>最近更新: 2022-08-03 10:54</span>
                    </div>
                </div>
                <div className='header-right'>
                    <div className='header-right-btn' onClick={onExportPDF}>
                        <DownloadOutlined className='mr-1'/>
                        导出
                    </div>
                    {/*<div className='header-right-btn'>*/}
                    {/*    <DownloadOutlined className='mr-1'/>*/}
                    {/*    预览*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className='banner'/>
            <div className='main' ref={pdfRef}>
                {/*/!*基础信息*!/*/}
                <BaseInfo data={data} setData={setData}/>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId={_.uniqueId("droppableId")}>
                        {(provided: any,snapshot:any) => {
                            return (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {
                                        blockModule?.map((item, index) => {
                                            return (
                                                <Draggable key={item} draggableId={item} index={index}>
                                                    {(provided, snapshot,) => {
                                                        return (
                                                            <div className={'mt-12'}
                                                                 ref={provided.innerRef}
                                                                 {...provided.draggableProps}
                                                            >
                                                                <div className='w-full flex justify-between items-center mb-4'>
                                                                    <Title title={titleArr[item]} />
                                                                    <div className={'flex flex-row text-gray-700 text-2xl'}>
                                                                        <div {...provided.dragHandleProps}>
                                                                            <Tooltip
                                                                                className={'mr-3'}
                                                                                title="拖拽调整顺序"
                                                                            >
                                                                                <DragOutlined
                                                                                    className={' change-c'}
                                                                                />
                                                                            </Tooltip>
                                                                        </div>
                                                                        <div>
                                                                            <Tooltip title="删除模块">
                                                                                <DeleteOutlined
                                                                                    className={'change-c'}
                                                                                    onClick={
                                                                                        () => {
                                                                                            handleDelModule(item, index)
                                                                                        }
                                                                                    }/>
                                                                            </Tooltip>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {
                                                                    (item === "advantages" || item === "skill" || item === "hobby" || item === "honor") ?
                                                                        <Other
                                                                            data={data}
                                                                            setData={setData}
                                                                            type={item}
                                                                            title={titleArr[item]}
                                                                        />
                                                                        :
                                                                        <Experience
                                                                            data={data}
                                                                            setData={setData}
                                                                            type={item}
                                                                            title={titleArr[item]}
                                                                        />
                                                                }
                                                            </div>
                                                        )
                                                    }}
                                                </Draggable>
                                            )
                                        })
                                    }
                                    {provided.placeholder}
                                </div>
                            )
                        }}
                    </Droppable>
                </DragDropContext>
                <div className='mt-12'>
                    <Title title={'添加模块'} />
                    <div className={'flex flex-wrap'}>
                        {
                            Object.keys(module).map((item, index) => {
                                return (
                                    !module[item] &&
                                    <Button
                                        key={index}
                                        onClick={() => {
                                            handleAddModule(item)
                                        }}
                                        type="dashed"
                                        className={'m-3'}
                                        icon={<PlusOutlined className={'mr-1'}/>}
                                    >
                                        {titleArr[item]}
                                    </Button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );

}
