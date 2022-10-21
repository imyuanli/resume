import {MinusCircleOutlined, PlusCircleOutlined, SettingOutlined} from "@ant-design/icons";
import {Button, Divider, Drawer} from "antd";
import React, {useEffect, useState} from "react";
import './index.css'
import Title from "../title";
import MyInput from "../myInput";
import {DEFAULT_TITLE} from "../../constants/default";
import _ from 'lodash'
import store from 'store'

interface props {
    data: object
    handleChangeData: any
}

const BaseInfo: React.FunctionComponent<props> = ({data, handleChangeData}) => {
    //这个组件的属性
    const dataKey = 'basicInfo'
    //信息管理的按钮
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const subtitle = DEFAULT_TITLE[dataKey]

    const [showInfo, setShowInfo] = useState(
        store.get("showInfo") ?
            store.get("showInfo")
            :
            {
                userName: true,
                avatar: true,
                position: true,
                gender: true,
                email: true,
                phone: true,
                weChatNumber: true,
                jobDate: true,
                birthDate: true,
                city: true,
                salary: true,
            }
    )
    const handelShow = (item: string) => {
        const res = {...showInfo}
        res[item] = !res[item]
        store.set("showInfo", res)
        setShowInfo(_.cloneDeep(res))
    }

    return (
        <div className='basicInfo'>
            <Title title='基础信息'/>
            <div className='content-box'>
                {
                    Object.keys(data[dataKey]).map((item, index) => {
                            if (item === 'avatar') {
                                return (
                                    showInfo[item] && <MyInput
                                        handleChangeData={handleChangeData}
                                        isInput
                                        key={index}
                                        dataKey={dataKey}
                                        childKey={item}
                                    />
                                )
                            } else if (item === 'gender') {
                                return (
                                    showInfo[item] && <MyInput
                                        key={index}
                                        handleChangeData={handleChangeData}
                                        isSelect
                                        dataKey={dataKey}
                                        childKey={item}
                                    />
                                )
                            } else if (item === 'jobDate' || item === 'birthDate') {
                                return (
                                    showInfo[item] && <MyInput
                                        handleChangeData={handleChangeData}
                                        isDate
                                        key={index}
                                        dataKey={dataKey}
                                        childKey={item}
                                    />
                                )
                            } else {
                                return (
                                    showInfo[item] && <MyInput
                                        handleChangeData={handleChangeData}
                                        isInput
                                        key={index}
                                        dataKey={dataKey}
                                        childKey={item}
                                    />
                                )
                            }
                        }
                    )
                }
            </div>
            <div className='set-info' onClick={showDrawer}>
                <SettingOutlined/>
                <span>信息管理</span>
            </div>
            <Drawer title={<div className={'text-xl font-semibold'}>信息管理</div>}
                    closable={false}
                    placement='right'
                    onClose={onClose}
                    open={open}
            >
                <div className={'p-3'}>
                    <div className={'text-lg mb-2'}>已展示</div>
                    <div className={'flex flex-wrap'}>
                        {
                            Object.keys(showInfo).map((item, index) => {
                                return (
                                    showInfo[item] &&
                                    <Button onClick={() => handelShow(item)} key={index}
                                            className={'m-2 flex justify-center items-center'}>
                                        <MinusCircleOutlined className='mr-1 '/>
                                        <span>{subtitle[item]}</span>
                                    </Button>
                                )
                            })
                        }
                    </div>
                </div>
                <Divider/>
                <div className={'p-3'}>
                    <div className={'text-lg mb-2'}>已隐藏</div>
                    <div className={'flex flex-wrap'}>
                        {
                            Object.keys(showInfo).map((item, index) => {
                                return (
                                    !showInfo[item] &&
                                    <Button onClick={() => handelShow(item)} key={index}
                                            className={'m-2 flex justify-center items-center'}>
                                        <PlusCircleOutlined className='mr-1 '/>
                                        <span>{subtitle[item]}</span>
                                    </Button>
                                )
                            })
                        }
                    </div>
                </div>
            </Drawer>
        </div>
    )
}
export default BaseInfo
