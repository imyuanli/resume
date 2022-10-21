import React, {useEffect, useState} from "react";
import Title from "../title";
import _ from 'lodash'
import FormItem from "../form-item";
import {Button, Collapse, Divider, Input, Tooltip} from "antd";
import MyTextArea from "../text-area";
import {DeleteOutlined, PlusCircleFilled, SettingOutlined} from "@ant-design/icons";
const { Panel } = Collapse;
interface props {
    data: object
    setData: any
}

const Education: React.FunctionComponent<props> = ({data, setData}) => {
    //属性
    const TYPE = 'education'
    const [education, setEducation] = useState(data[TYPE])
    const single = {...education[0]}
    //更新数据
    const handleChangeData = (key: string, value: any, index: any) => {
        const res = _.cloneDeep(education)
        res[index][key] = value
        setEducation(_.cloneDeep(res))
    }
    useEffect(() => {
        setData({
            education
        },)
    }, [education])
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
        const res = _.cloneDeep(education)
        res.push(single)
        setEducation(_.cloneDeep(res))
    }
    const handelDelModule = (index: any) => {
        const res = _.cloneDeep(education)
        res.splice(index, 1)
        setEducation(_.cloneDeep(res))
    }
    return (
        <div className='mt-12'>
            <Title title='教育经历'/>
            <div className='content-box'>
                {
                    education.map((edu: any, index: any) => {
                        return (
                            <Collapse className='mb-3'>
                                <Panel header={
                                    <div className='flex justify-between items-end mb-3'>
                                        <div>
                                            <div className={'text-lg text-gray-700 mb-1'}>{edu?.schoolName}</div>
                                            <div className={'text-sm text-gray-500'}>
                                                <span>{edu?.qualification}</span>
                                                <Divider type={'vertical'}/>
                                                <span>{edu?.major}</span>
                                                <Divider type={'vertical'}/>
                                                <span>{edu?.timeSlot}</span>
                                            </div>
                                        </div>
                                        <Tooltip title="删除">
                                            <DeleteOutlined className={'text-lg text-gray-700'} onClick={() => {
                                                handelDelModule(index)
                                            }}/>
                                        </Tooltip>
                                    </div>
                                        }
                                       key="1">
                                    <div className='content-box'>
                                        {
                                            Object.keys(edu).map((item, d) => {
                                                if (item === 'timeSlot') {
                                                    return (
                                                        <FormItem
                                                            key={d}
                                                            handleChangeData={handleChangeData}
                                                            isRange
                                                            dataType={TYPE}
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
                                                            dataType={TYPE}
                                                            dataKey={item}
                                                            index={index}
                                                            optionArr={optionArr}
                                                        />
                                                    )
                                                } else if (item === 'associationActivity') {
                                                    return (
                                                        <MyTextArea
                                                            key={d}
                                                            handleChangeData={handleChangeData}
                                                            dataType={TYPE}
                                                            dataKey={item}
                                                            index={index}
                                                        />
                                                    )
                                                } else {
                                                    return (
                                                        <FormItem
                                                            key={d}
                                                            handleChangeData={handleChangeData}
                                                            isInput
                                                            dataType={TYPE}
                                                            dataKey={item}
                                                            index={index}
                                                        />
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </Panel>

                            </Collapse>
                        )
                    })
                }
            </div>
            <div className='add-ons' onClick={handelAddModule}>
                <PlusCircleFilled className='mr-1'/>
                <span>增加新的教育经历</span>
            </div>

        </div>
    )
}
export default Education
