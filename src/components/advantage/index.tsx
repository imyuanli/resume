import './index.css'
import React from "react";
import Title from "../title";
import {Input} from 'antd';
import {DEFAULT_PLACEHOLDER, DEFAULT_TITLE} from "../../constants/default";

const {TextArea} = Input;

interface props {
    data: object,
    handleChangeData: any
}

const Advantage: React.FunctionComponent<props> = ({data, handleChangeData}) => {
    //这个组件的属性
    const dataKey = 'advantages'
    const subtitle = DEFAULT_TITLE[dataKey]
    const placeholder = DEFAULT_PLACEHOLDER[dataKey]
    return (
        <div className='advantages mt-12'>
            <Title title={subtitle}/>
            <TextArea
                onChange={(e) => {
                    handleChangeData(dataKey, "value", e.target.value)
                }}
                style={{resize: 'none'}}
                placeholder={placeholder}
                showCount
                maxLength={1000}
                rows={10}
            />
        </div>
    );
}
export default Advantage
