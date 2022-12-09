import {DeleteOutlined, DownloadOutlined, DragOutlined, FieldTimeOutlined, PlusOutlined} from "@ant-design/icons";
import {
    DEFAULT_DATA,
    DEFAULT_MODULE_BLOCK,
    DEFAULT_MODULE_NONE,
    DEFAULT_TITLE
} from "../constants/default";
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
import store from "store";

export default function HomePage() {
    const [data, setData] = useSetState(DEFAULT_DATA)
    //控制模块
    const [moduleBlock, setModuleBlock] = useState(
        store.get('local_module_block') ?
            store.get('local_module_block')
            :
            DEFAULT_MODULE_BLOCK
    )
    const [moduleNone, setModuleNone] = useState(
        store.get('local_module_none') ?
            store.get('local_module_none')
            :
            DEFAULT_MODULE_NONE
    )

    //默认标题模块拥有顺序
    const titleArr = DEFAULT_TITLE

    //新增模块
    const handleAddModule = (item: any, index: any) => {
        const res = _.cloneDeep(moduleNone)
        res.splice(index, 1)
        setModuleNone(_.cloneDeep(res))
        setModuleBlock([...moduleBlock, item])
    }

    //删除模块
    const handleDelModule = (item: any, index: any) => {
        const res = _.cloneDeep(moduleBlock)
        res.splice(index, 1)
        setModuleBlock(_.cloneDeep(res))
        setModuleNone([...moduleNone, item])
    }

    // 只要更改就去更新本地的数据
    useEffect(() => {
        store.set('local_module_block', moduleBlock)
        store.set('local_module_none', moduleNone)
    }, [moduleBlock, moduleNone])

    //导出
    const pdfRef = useRef(null)
    const onExportPDF = async () => {
        console.log(data)
        console.log(moduleBlock)
        // await exportPDF('测试导出PDF', pdfRef.current)
    }

    //拖拽
    const onDragEnd = (result: any) => {
        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;
        if (sourceIndex === destinationIndex) {
            return;
        }
        const moduleList = _.cloneDeep(moduleBlock);
        const [draggedItem] = moduleList.splice(sourceIndex, 1);
        moduleList.splice(destinationIndex, 0, draggedItem);
        setModuleBlock(_.cloneDeep(moduleList))
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
                {/*详细信息*/}
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId={_.uniqueId("droppableId")}>
                        {(provided: any, snapshot: any) => {
                            return (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {
                                        moduleBlock?.map((item: any, index: any) => {
                                            return (
                                                //显示出现的module
                                                <Draggable key={item?.module_name} draggableId={item?.module_name}
                                                           index={index}>
                                                    {(provided, snapshot,) => {
                                                        return (
                                                            <div className={'mt-12'}
                                                                 ref={provided.innerRef}
                                                                 {...provided.draggableProps}
                                                            >
                                                                <div
                                                                    className='w-full flex justify-between items-center mb-4'>
                                                                    <Title title={titleArr[item?.module_name]}/>
                                                                    <div
                                                                        className={'flex flex-row text-gray-700 text-2xl'}>
                                                                        <div {...provided.dragHandleProps}>
                                                                            <Tooltip
                                                                                className={'mr-3'}
                                                                                title="拖拽调整顺序"
                                                                            >
                                                                                <DragOutlined
                                                                                    className={'change-c'}
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
                                                                    (item?.module_name === "advantages" || item?.module_name === "skill" || item?.module_name === "hobby" || item?.module_name === "honor") ?
                                                                        <Other
                                                                            data={data}
                                                                            setData={setData}
                                                                            type={item?.module_name}
                                                                            title={titleArr[item?.module_name]}
                                                                        />
                                                                        :
                                                                        <Experience
                                                                            data={data}
                                                                            setData={setData}
                                                                            type={item?.module_name}
                                                                            title={titleArr[item?.module_name]}
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
                    <Title title={'添加模块'}/>
                    <div className={'flex flex-wrap'}>
                        {
                            moduleNone.map((item:any, index:any) => {
                                return (
                                    <Button
                                        key={index}
                                        onClick={() => {
                                            handleAddModule(item, index)
                                        }}
                                        type="dashed"
                                        className={'m-3'}
                                        icon={<PlusOutlined className={'mr-1'}/>}
                                    >
                                        {titleArr[item?.module_name]}
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
