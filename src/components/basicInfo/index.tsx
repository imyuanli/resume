import {
    DeleteOutlined,
    DragOutlined,
    MinusCircleOutlined,
    PlusCircleOutlined,
    SettingOutlined
} from "@ant-design/icons";
import {Button, Divider, Drawer, Tooltip} from "antd";
import React, {useEffect, useState} from "react";
import Title from "../title";
import FormItem from "../form-item";
import {DEFAULT_SUBTITLE} from "../../constants/default";
import _ from 'lodash'
import store from 'store'

interface props {
    data: object
    setData: any
}

const BaseInfo: React.FunctionComponent<props> = ({data, setData}) => {
    //属性
    const TYPE = 'basicInfo'
    const [basicInfo, setBasicInfo] = useState(data[TYPE])
    //更新数据
    const handleChangeData = (key: string, value: any) => {
        const res = _.cloneDeep(basicInfo)
        res[key] = value
        setBasicInfo(_.cloneDeep(res))
    }
    useEffect(() => {
        setData({
            basicInfo
        },)
    }, [basicInfo])
    const data_subtitle = DEFAULT_SUBTITLE[TYPE]
    //信息管理的按钮
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
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
        handleChangeData(item, "")
    }
    const optionArr = [
        {name: '男'},
        {name: '女'},
    ]
    return (
        <div className='mt-12'>
            <Title title={'基础信息'} />
            <div className='content-box'>
                {
                    Object.keys(data[TYPE]).map((item, index) => {
                            if (item === 'avatar') {
                                return (
                                    showInfo[item] &&
                                    <FormItem
                                        handleChangeData={handleChangeData}
                                        isInput
                                        key={index}
                                        dataType={TYPE}
                                        dataKey={item}
                                    />
                                )
                            } else if (item === 'gender') {
                                return (
                                    showInfo[item] &&
                                    <FormItem
                                        key={index}
                                        handleChangeData={handleChangeData}
                                        isSelect
                                        dataType={TYPE}
                                        dataKey={item}
                                        optionArr={optionArr}
                                    />
                                )
                            } else if (item === 'jobDate' || item === 'birthDate') {
                                return (
                                    showInfo[item] &&
                                    <FormItem
                                        handleChangeData={handleChangeData}
                                        isDate
                                        key={index}
                                        dataType={TYPE}
                                        dataKey={item}
                                    />
                                )
                            } else {
                                return (
                                    showInfo[item] &&
                                    <FormItem
                                        handleChangeData={handleChangeData}
                                        isInput
                                        key={index}
                                        dataType={TYPE}
                                        dataKey={item}
                                    />
                                )
                            }
                        }
                    )
                }
            </div>
            <div className='add-ons' onClick={showDrawer}>
                <SettingOutlined className='mr-1'/>
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
                                        <span>{data_subtitle[item]}</span>
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
                                        <span>{data_subtitle[item]}</span>
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
