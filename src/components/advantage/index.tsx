import React, {useEffect, useState} from "react";
import Title from "../title";
import FormItem from "../form-item";
import TextArea from "antd/es/input/TextArea";
import {DEFAULT_PLACEHOLDER} from "../../constants/default";

interface props {
    data: object,
    setData: any
}

const Advantage: React.FunctionComponent<props> = ({data, setData}) => {
    //这个组件的属性
    const TYPE = 'advantages'
    const placeholder = DEFAULT_PLACEHOLDER[TYPE]
    const [advantages, setAdvantages] = useState(data['advantages'])
    useEffect(() => {
        setData({
            advantages
        })
    }, [advantages])
    return (
        <div className='advantages mt-12'>
            <Title title={"个人优势"}/>
            <TextArea
                onChange={(e) => {
                    setAdvantages(e.target.value)
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
