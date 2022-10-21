import {Input, Select, DatePicker} from "antd";
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import './index.css'
import React from "react";
import {DEFAULT_PLACEHOLDER, DEFAULT_TITLE} from "../constants/default";

const {Option} = Select;

//type和key,{basicInfo:{userName:'姓名'},...}
interface props {
    handleChangeData: any,
    dataKey: string,
    childKey: string,
    isSelect?: boolean,
    isInput?: boolean,
    isDate?: boolean
}

const MyInput: React.FunctionComponent<props> = ({
                                                     handleChangeData,
                                                     dataKey,
                                                     childKey,
                                                     isSelect = false,
                                                     isInput = false,
                                                     isDate = false
                                                 }) => {

    const subtitle = DEFAULT_TITLE[dataKey]
    const placeholder = DEFAULT_PLACEHOLDER[dataKey]
    return (
        <div className='content'>
            <div className='content-title'>{subtitle[childKey]}</div>
            {
                isInput &&
                <Input
                    onChange={(e) => {
                        handleChangeData(dataKey, childKey, e.target.value)
                    }}
                    allowClear
                    placeholder={placeholder[childKey]}
                />
            }
            {
                isSelect &&
                <Select defaultValue='male'
                        onChange={(value) => {
                            handleChangeData(dataKey, childKey, value)
                        }}
                        placeholder={placeholder[childKey]}
                        style={{width: '100%'}}
                >
                    <Option value='male'>男</Option>
                    <Option value='female'>女</Option>
                </Select>
            }
            {
                isDate &&
                <DatePicker
                    onChange={(_, dateString) => {
                        handleChangeData(dataKey, childKey, dateString)
                    }}
                    placeholder={placeholder[childKey]}
                    locale={locale}
                    style={{width: '100%'}}/>
            }
        </div>
    )
}
export default MyInput
