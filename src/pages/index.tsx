import {
    DeleteOutlined,
    DownloadOutlined,
    DragOutlined, EyeOutlined,
    MailOutlined, PhoneOutlined,
    PlusOutlined,
    UserOutlined, WechatOutlined
} from "@ant-design/icons";
import {
    DEFAULT_DATA,
    DEFAULT_MODULE_BLOCK,
    DEFAULT_MODULE_NONE,
    DEFAULT_TITLE, MOCK_DATA
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
// import html2PDF from 'jspdf-html2canvas'
import {Button, Divider, Modal, Tooltip} from "antd";
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
        await exportPDF(`${data?.basicInfo?.userName}-${data?.basicInfo?.position}.pdf`, pdfRef.current)
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

    const {
        basicInfo: {
            userName,
        },
    } = MOCK_DATA

    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='index'>
            <div className='header'>
                <div className='header-left'>
                    <div>简历制作</div>
                </div>
                <div className='header-right flex'>
                    <div className='header-right-btn' onClick={showModal}>
                        {/*<EyeOutlined className='mr-1'/>*/}
                        预览&导出
                    </div>
                </div>
            </div>
            <div className='banner'/>
            <div className='main'>
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
                            moduleNone.map((item: any, index: any) => {
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
            <Modal
                footer={null}
                open={isModalOpen}
                onCancel={handleCancel}
                width={832.23}
                closable={false}
            >
                <div ref={pdfRef} className={`pdf-content p-9`}>
                    <div className={'mb-9'}>
                        <div className={'flex mb-1'}>
                            {/*{*/}
                            {/*    avatar &&*/}
                            {/*    <img className={'w-16 mr-3'} src={require('../static/cv_template_world_cup_b.png')}*/}
                            {/*         alt=""/>*/}
                            {/*}*/}
                            <div>
                                {
                                    data?.basicInfo?.userName && <h1>{data?.basicInfo?.userName}</h1>
                                }
                                {/*期望相关*/}
                                {
                                    <div>
                                        {
                                            data?.basicInfo?.position &&
                                            <>
                                                <span className={'mr-3'}>求职意向:{data?.basicInfo?.position}</span>
                                                <Divider type={'vertical'}/>
                                            </>
                                        }
                                        {
                                            data?.basicInfo?.city &&
                                            <>
                                                <span>期望城市:{data?.basicInfo?.city}</span>
                                                <Divider type={'vertical'}/>
                                            </>
                                        }
                                        {
                                            data?.basicInfo?.salary && <span>期望薪资:{data?.basicInfo?.salary}</span>
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                        {/*联系方式*/}
                        <div className={'flex flex-row text-base items-center'}>
                            {
                                data?.basicInfo?.gender
                                &&
                                <div className={'mr-6'}>
                                    <UserOutlined className={'contact-icon'}/>
                                    {data?.basicInfo?.gender}
                                </div>
                            }
                            {
                                data?.basicInfo?.gender
                                &&
                                <div className={'mr-6'}>
                                    <PhoneOutlined className={'contact-icon'}/>{data?.basicInfo?.phone}
                                </div>
                            }
                            {
                                data?.basicInfo?.weChatNumber
                                &&
                                <div className={'mr-6'}>
                                    <WechatOutlined className={'contact-icon'}/>{data?.basicInfo?.weChatNumber}
                                </div>
                            }
                            {
                                data?.basicInfo?.email
                                &&
                                <div className={'mr-6'}>
                                    <MailOutlined className={'contact-icon'}/>{data?.basicInfo?.email}
                                </div>
                            }
                        </div>
                    </div>
                    {
                        moduleBlock?.map((item: any, index: any) => {
                            return (
                                <div key={index} className={'mb-9'}>
                                    <ResumeTitle value={titleArr[item?.module_name]}/>
                                    {
                                        (item?.module_name === "advantages" || item?.module_name === "skill" || item?.module_name === "hobby" || item?.module_name === "honor") ?
                                            <ResumeText value={data[item?.module_name]}/>
                                            :
                                            <ExperienceContent value={data[item?.module_name]}/>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className={'p-2 flex justify-center items-center'}>
                    <Button size={'large'} type={'primary'} onClick={onExportPDF}>导出</Button>
                </div>
            </Modal>
        </div>
    );
}


function ResumeTitle(props: any) {
    const {value} = props
    return (
        <div className={'resume-title text-2xl font-bold mb-2'}>
            {value}
        </div>
    )
}

function ResumeText(props: any) {
    const {value} = props
    return (
        <div className={'text-base whitespace-pre-wrap'}>
            {value}
        </div>
    )
}

function ExperienceContent(props: any) {
    const {value} = props
    return (
        <>
            {
                value.map((item: any, index: number) => {
                    const {name, time, position, describe, result, qualification} = item
                    return (
                        <div className={'mb-6'} key={index}>
                            <div className={'flex justify-between text-lg mb-1'}>
                                <div className={'flex'}>
                                    {
                                        name && <div className={'mr-6'}>{name}</div>
                                    }
                                    {
                                        qualification && <div className={'mr-6'}>{qualification}</div>
                                    }
                                    {
                                        position && <div className={'mr-6'}>{position}</div>
                                    }
                                </div>
                                {
                                    time && <div>{time}</div>
                                }
                            </div>
                            <div className={'text-base whitespace-pre-wrap'}>
                                {
                                    describe &&
                                    <div className={'mb-1'}>
                                        <div className={'font-bold'}>内容:</div>
                                        <div>{describe}</div>
                                    </div>
                                }
                                {
                                    result &&
                                    <div>
                                        <div className={'font-bold'}>业绩:</div>
                                        <div>{result}</div>
                                    </div>
                                }

                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

