import {Input, Select, DatePicker} from "antd";
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import './index.css'
import React from "react";
import {DEFAULT_PLACEHOLDER, DEFAULT_SUBTITLE} from "../constants/default";
import TextArea from "antd/es/input/TextArea";

const {Option} = Select;
const {RangePicker} = DatePicker;

interface props {
    handleChangeData: any,
    dataType: string,
    dataKey: string,
    isSelect?: boolean,
    isInput?: boolean,
    isDate?: boolean,
    isRange?: boolean,
}

const FormItem: React.FunctionComponent<props> = ({
                                                      handleChangeData,
                                                      dataType,
                                                      dataKey,
                                                      isSelect = false,
                                                      isInput = false,
                                                      isDate = false,
                                                      isRange = false,
                                                  }) => {
    const placeholder = DEFAULT_PLACEHOLDER[dataType]
    const data_subtitle = DEFAULT_SUBTITLE[dataType]
    return (
        <div className='content'>
            <div className='content-title'>{data_subtitle[dataKey]}</div>
            {
                isInput &&
                <Input
                    onChange={(e) => {
                        handleChangeData(dataKey, e.target.value)
                    }}
                    allowClear
                    placeholder={placeholder[dataKey]}
                />
            }
            {
                isSelect &&
                <Select
                    onChange={(value) => {
                        handleChangeData(dataKey, value)
                    }}
                    placeholder={placeholder[dataKey]}
                    style={{width: '100%'}}
                >
                    <Option value='male'>男</Option>
                    <Option value='female'>女</Option>
                </Select>
            }
            {
                isRange &&
                <RangePicker
                    onChange={(_, dateString) => {
                        console.log(dateString)
                    }}
                    placeholder={placeholder[dataKey]}
                    locale={locale}
                    style={{width: '100%'}}
                />
            }
            {
                isDate &&
                <DatePicker
                    onChange={(_, dateString) => {
                        handleChangeData(dataKey, dateString)
                    }}
                    placeholder={placeholder[dataKey]}
                    locale={locale}
                    style={{width: '100%'}}
                />
            }
        </div>
    )
}
export default FormItem
