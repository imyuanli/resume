import {DownloadOutlined, FieldTimeOutlined} from "@ant-design/icons";

import {DEFAULT_DATA} from "../constants/default";
import {useSetState} from "ahooks";
import BaseInfo from "../components/basicInfo";
import Advantage from "../components/advantage";
import Experience from "../components/experience";
import './index.css'

export default function HomePage() {
    const [data, setData] = useSetState(DEFAULT_DATA)

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
                {/*/!*基础信息*!/*/}
                <BaseInfo data={data} setData={setData}/>
                {/*/!*个人优势*!/*/}
                <Advantage data={data} setData={setData}/>

                {/*经历*/}
                <Experience
                    data={data}
                    setData={setData}
                    type={'education'}
                    title={'教育经历'}
                />
                <Experience
                    data={data}
                    setData={setData}
                    type={'internship'}
                    title={'实习经历'}
                />
                <Experience
                    data={data}
                    setData={setData}
                    type={'project'}
                    title={'项目经历'}
                />
                <Experience
                    data={data}
                    setData={setData}
                    type={'work'}
                    title={'工作经历'}
                />
            </div>
        </div>
    );

}
