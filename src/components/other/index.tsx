import React, {useEffect, useState} from "react";
import Title from "../title";
import TextArea from "antd/es/input/TextArea";
import {DEFAULT_PLACEHOLDER} from "../../constants/default";

interface props {
    data: object,
    setData: any,
    title:string,
    type:string,
}

const Other: React.FunctionComponent<props> = ({data, setData,title,type}) => {
    //这个组件的属性
    const placeholder = DEFAULT_PLACEHOLDER[type]
    const [state, setSate] = useState(data[type])
    useEffect(() => {
        setData({
            [type]:state
        })
    }, [state])
    return (
        <TextArea
            onChange={(e) => {
                setSate(e.target.value)
            }}
            style={{resize: 'none'}}
            placeholder={placeholder}
            showCount
            maxLength={1000}
            rows={10}
        />
    );
}
export default Other
