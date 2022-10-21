import {Input, Select, DatePicker} from "antd";
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import './index.css'
import React from "react";
import {DEFAULT_PLACEHOLDER, DEFAULT_SUBTITLE} from "../constants/default";

const {Option} = Select;

//type和key,{basicInfo:{userName:'姓名'},...}
interface props {
    handleChangeData: any,
    headline: string,
    childKey: string,
    isSelect?: boolean,
    isInput?: boolean,
    isDate?: boolean
}

const FormItem: React.FunctionComponent<props> = ({
                                                      handleChangeData,
                                                      headline,
                                                      childKey,
                                                      isSelect = false,
                                                      isInput = false,
                                                      isDate = false
                                                  }) => {


    const placeholder = DEFAULT_PLACEHOLDER[headline]
    const data_subtitle = DEFAULT_SUBTITLE[headline]
    return (
        <div className='content'>
            <div className='content-title'>{data_subtitle[childKey]}</div>
            {
                isInput &&
                <Input
                    onChange={(e) => {
                        handleChangeData(headline, childKey, e.target.value)
                    }}
                    allowClear
                    placeholder={placeholder[childKey]}
                />
            }
            {
                isSelect &&
                <Select
                        onChange={(value) => {
                            handleChangeData(headline, childKey, value)
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
                        handleChangeData(headline, childKey, dateString)
                    }}
                    placeholder={placeholder[childKey]}
                    locale={locale}
                    style={{width: '100%'}}
                />
            }
        </div>
    )
}
export default FormItem
