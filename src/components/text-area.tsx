import './index.css'
import React from "react";
import TextArea from "antd/es/input/TextArea";
import {DEFAULT_PLACEHOLDER, DEFAULT_SUBTITLE} from "../constants/default";

interface props {
    handleChangeData: any,
    dataType: string,
    dataKey: string,
    index?:any,
}

const MyTextArea: React.FunctionComponent<props> = ({handleChangeData,dataKey,index,dataType}) => {
    const placeholder = DEFAULT_PLACEHOLDER[dataType]
    const data_subtitle = DEFAULT_SUBTITLE[dataType]
    return (
        <div className='w-full'>
            <div style={{marginBottom:6}} className='content-title '>{data_subtitle[dataKey]}</div>
            <TextArea
                onChange={(e) => {
                    handleChangeData(dataKey, e.target.value,index)
                }}
                style={{resize: 'none'}}
                placeholder={placeholder[dataKey]}
                showCount
                maxLength={2500}
                rows={10}
            />
        </div>
    )
}
export default MyTextArea
