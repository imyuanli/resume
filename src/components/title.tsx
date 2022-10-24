import './index.css'
import React from "react";
import {Tooltip} from "antd";
import {DeleteOutlined, DragOutlined} from "@ant-design/icons";

interface props {
    title: string,
    handleDelModule?: any,
    provided?: any
}

const Title: React.FunctionComponent<props> = ({title, handleDelModule, provided}) => {
    console.log(provided)
    return (
        <div className='w-full flex justify-between items-center'>
            <div className='title'>{title}</div>
            <div>
                {
                    <Tooltip className={'mr-3'} title="移动模块" {...provided}>
                        <DragOutlined className={'text-gray-700 text-2xl change-c'}/>
                    </Tooltip>
                }
                {
                    handleDelModule &&
                    <Tooltip title="删除模块">
                        <DeleteOutlined className={'text-gray-700 text-2xl change-c'} onClick={handleDelModule}/>
                    </Tooltip>
                }
            </div>
        </div>
    )
}
export default Title
