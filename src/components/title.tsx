import './index.css'
import React from "react";
import {Tooltip} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

interface props {
    title: string,
    handleDelModule?:any
}

const Title: React.FunctionComponent<props> = ({title,handleDelModule}) => {
    return (
        <div className='w-full flex justify-between items-center'>
            <div className='title'>{title}</div>
            {
                handleDelModule &&
                <Tooltip title="删除模块">
                    <DeleteOutlined className={'text-gray-700 text-2xl change-c'} onClick={handleDelModule}/>
                </Tooltip>
            }
        </div>
    )
}
export default Title
