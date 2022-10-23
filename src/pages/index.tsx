import {DownloadOutlined, FieldTimeOutlined, PlusOutlined} from "@ant-design/icons";

import {DEFAULT_DATA, DEFAULT_MODULE_DISPLAY, DEFAULT_TITLE} from "../constants/default";
import {useSetState} from "ahooks";
import BaseInfo from "../components/basicInfo";
import Other from "../components/other";
import Experience from "../components/experience";
import './index.css'
import React, {useEffect, useRef, useState} from "react";
import _ from "lodash";
import Title from "../components/title";
import TextArea from "antd/es/input/TextArea";
import {Button} from "antd";
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

    useEffect(() => {
        console.log(module)
        console.log(blockModule)
    }, [module, blockModule])

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
                {
                    blockModule?.map((item, index) => {
                        if (item === "advantages" || item === "skill" || item === "hobby" || item === "honor") {
                            return (
                                <Other
                                    data={data}
                                    setData={setData}
                                    type={item}
                                    title={titleArr[item]}
                                    handleDelModule={() => {
                                        handleDelModule(item, index)
                                    }}
                                />
                            )
                        } else {
                            return (
                                <Experience
                                    data={data}
                                    setData={setData}
                                    type={item}
                                    title={titleArr[item]}
                                    handleDelModule={() => {
                                        handleDelModule(item, index)
                                    }}
                                />
                            )
                        }
                    })
                }
                <div className='mt-12'>
                    <Title title={'添加模块'}/>
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
                                        icon={<PlusOutlined className={'mr-1'} />}
                                    >
                                        {titleArr[item]}
                                    </Button >
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );

}
