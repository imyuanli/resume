import React, {useEffect, useState} from "react";
import Title from "../title";
import _ from 'lodash'
import FormItem from "../form-item";
import {Button, Collapse, Divider, Input, Tooltip} from "antd";
import MyTextArea from "../text-area";
import {CaretRightOutlined, DeleteOutlined, PlusCircleFilled, RightOutlined, SettingOutlined} from "@ant-design/icons";
import {DEFAULT_SINGLE, DEFAULT_SUBTITLE} from "../../constants/default";
import {DragDropContext} from "react-beautiful-dnd";

const {Panel} = Collapse;

interface props {
    data: object
    setData: any,
    type: string,
    title: string,
}

const Experience: React.FunctionComponent<props> = ({data, setData, type, title}) => {
    const [state, setState] = useState(data[type])
    const single = DEFAULT_SINGLE[type]
    const subtitle = DEFAULT_SUBTITLE[type]
    //更新数据
    const handleChangeData = (key: string, value: any, index: any) => {
        const res = _.cloneDeep(state)
        res[index][key] = value
        setState(_.cloneDeep(res))
    }
    useEffect(() => {
        setData({
            [type]: state
        },)
    }, [state])
    //教育独有
    const optionArr = [
        {name: '初中及以下'},
        {name: '中专/中技'},
        {name: '高中'},
        {name: '大专'},
        {name: '本科'},
        {name: '本科以上'},
    ]
    //增加新的
    const handelAddModule = () => {
        const res = _.cloneDeep(state)
        res.push(single)
        setState(_.cloneDeep(res))
    }
    const handelDelModule = (index: any) => {
        const res = _.cloneDeep(state)
        res.splice(index, 1)
        setState(_.cloneDeep(res))
    }


    const onDragEnd=(res:any)=>{
        console.log(res)
    }
    return (
        <>
            <div className='content-box'>
                {
                    state.map((s: any, index: any) => {
                        return (
                            <Collapse
                                expandIconPosition={'end'}
                                className='mb-3 w-full rounded-md bg-white collapse-box'
                                expandIcon={
                                    ({isActive}) =>
                                        <RightOutlined
                                            style={{fontSize: 16, lineHeight: 18}}
                                            rotate={isActive ? 90 : 0}
                                            className={'change-c'}
                                        />
                                }
                                key={index}
                            >
                                <DragDropContext onDragEnd={onDragEnd}>
                                    <Panel
                                        header={
                                            <div className='flex justify-between items-center'>
                                                <div>
                                                    <div
                                                        className={'text-base text-gray-700 mb-1'}>{s.name ? s.name : `未填写${subtitle?.name}`}</div>
                                                    <div className={'text-sm text-gray-500'}>
                                                        {
                                                            type === 'education' &&
                                                            <>
                                                                <span>{s.qualification ? s.qualification : subtitle?.qualification}</span>
                                                                <Divider type={'vertical'}/>
                                                                <span>{s.major ? s.major : subtitle?.major}</span>
                                                            </>
                                                        }
                                                        {
                                                            (type === 'internship' || type === 'work')
                                                            &&
                                                            <span>{s.positionType ? s.positionType : subtitle?.positionType}</span>
                                                        }
                                                        {
                                                            type === 'project'
                                                            &&
                                                            <span>{s.role ? s.role : subtitle.role}</span>
                                                        }
                                                        {
                                                            type === 'volunteer'
                                                            &&
                                                            <span>{s.duration ? s.duration : subtitle.duration}</span>
                                                        }
                                                        {
                                                            type === 'society'
                                                            &&
                                                            <span>{s.role ? s.role : subtitle.role}</span>
                                                        }
                                                        <Divider type={'vertical'}/>
                                                        <span>{s.time ? s.time : subtitle?.time}</span>
                                                    </div>
                                                </div>
                                                <Tooltip title="删除" className={'del-btn'}>
                                                    <DeleteOutlined className={'text-gray-700 text-lg change-c'} onClick={() => {
                                                        handelDelModule(index)
                                                    }}/>
                                                </Tooltip>
                                            </div>
                                        }
                                        key="1">
                                        <div className='content-box'>
                                            {
                                                Object.keys(s).map((item, d) => {
                                                    if (item === 'time') {
                                                        return (
                                                            <FormItem
                                                                key={d}
                                                                handleChangeData={handleChangeData}
                                                                isRange
                                                                dataType={type}
                                                                dataKey={item}
                                                                index={index}
                                                            />
                                                        )
                                                    } else if (item === 'describe' || item === 'result') {
                                                        return (
                                                            <MyTextArea
                                                                key={d}
                                                                handleChangeData={handleChangeData}
                                                                dataType={type}
                                                                dataKey={item}
                                                                index={index}
                                                            />
                                                        )
                                                    } else if (item === 'qualification') {
                                                        return (
                                                            <FormItem
                                                                key={d}
                                                                handleChangeData={handleChangeData}
                                                                isSelect
                                                                dataType={type}
                                                                dataKey={item}
                                                                index={index}
                                                                optionArr={optionArr}
                                                            />
                                                        )
                                                    } else {
                                                        return (
                                                            <FormItem
                                                                key={d}
                                                                handleChangeData={handleChangeData}
                                                                isInput
                                                                dataType={type}
                                                                dataKey={item}
                                                                index={index}
                                                            />
                                                        )
                                                    }
                                                })
                                            }
                                        </div>
                                    </Panel>
                                </DragDropContext>

                            </Collapse>
                        )
                    })
                }
            </div>
            <div className='add-ons' onClick={handelAddModule}>
                <PlusCircleFilled className='mr-1'/>
                <span>增加新的{title}</span>
            </div>
        </>
    )
}
export default Experience
