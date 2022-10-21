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
        <div className='advantages mt-12 w-2/3'>
            <Title title={subtitle}/>
            <div className={'flex justify-center items-center w-full'}>
                <TextArea
                    onChange={(e) => {
                        handleChangeData(dataKey, "value", e.target.value)
                    }}
                    placeholder={placeholder}
                    showCount
                    maxLength={1000}
                    rows={10}
                />
            </div>
        </div>
    );
}
export default Advantage
