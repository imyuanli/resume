import React, {useEffect, useState} from "react";
import Title from "../title";
import {DEFAULT_PLACEHOLDER, DEFAULT_SUBTITLE} from "../../constants/default";
import _ from 'lodash'
import FormItem from "../form-item";
import {Input} from "antd";
import MyTextArea from "../text-area";

interface props {
    data: object
    setData: any
}

const Education: React.FunctionComponent<props> = ({data, setData}) => {
    //属性
    const TYPE = 'education'
    const [education, setEducation] = useState(data[TYPE])
    //更新数据
    const handleChangeData = (key: string, value: any, index: any) => {
        const res = _.cloneDeep(education)
        res[index][key] = value
        setEducation(_.cloneDeep(res))
    }
    const placeholder = DEFAULT_PLACEHOLDER[TYPE]
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
    return (
        <div className='mt-12'>
            <Title title='教育经历'/>
            <div className='content-box'>
                {
                    education.map((edu: any, index: any) => {
                        return (
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
                                }
                                else if (item === 'qualification') {
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
                                }
                                else if (item === 'associationActivity') {
                                    return (
                                        <MyTextArea
                                            key={d}
                                            handleChangeData={handleChangeData}
                                            dataType={TYPE}
                                            dataKey={item}
                                            index={index}
                                        />
                                    )
                                }
                                else {
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
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Education
