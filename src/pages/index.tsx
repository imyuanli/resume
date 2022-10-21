import {Button} from "antd";
import {DownloadOutlined, FieldTimeOutlined} from "@ant-design/icons";
import './index.css'
import {useState} from "react";
import {DEFAULT_DATA} from "../constants/default";
import BaseInfo from "../components/basicInfo";
import Advantage from "../components/advantage";

export default function HomePage() {
    const [data, setData] = useState(DEFAULT_DATA)
    const handleChangeData = (dataKey: string, childKey: any, childValue: string) => {
        let res = {...data[dataKey]}
        res[childKey] = childValue
        data[dataKey] = res
        setData(data)
    }
    return (
        <div className='index'>
            <div className='header'>
                <div className='header-left'>
                    <div>我的我的</div>
                    <div className='header-time'>
                        <FieldTimeOutlined className='mr-1'/>
                        <span>最近更新: 2022-08-03 10:54</span>
                    </div>
                </div>
                <div className='header-right'>
                    <div className='header-right-btn' onClick={() => {
                        console.log(data)
                    }}>
                        <DownloadOutlined className='mr-1'/>
                        导出
                    </div>
                    {/*<div className='header-right-btn'>*/}
                    {/*    <DownloadOutlined className='mr-1'/>*/}
                    {/*    预览*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className='banner'/>
            <div className='main'>
                {/*基础信息*/}
                <BaseInfo data={data} handleChangeData={handleChangeData}/>
                {/*<Advantage data={data} handleChangeData={handleChangeData} />*/}
            </div>
        </div>
    );
}
