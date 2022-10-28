import React, {useRef} from 'react';
import {Button, Drawer, Modal} from 'antd';
import {exportPDF} from "../utils";
import {DEFAULT_SINGLE, MOCK_DATA} from "../constants/default";
const Article = () => {
    //
    // const pdfRef = useRef(null)
    //
    // const onExportPDF = async () => {
    //     await exportPDF('测试导出PDF', pdfRef.current)
    // }
    const data = MOCK_DATA
    const {basicInfo} = data
    return (
        <div className={'bg-gray-500  w-full h-screen flex'}>
            <Drawer mask={false} closable={false} width={400} title="选择模板" placement="left" open={true}>
                <div>
                    dadad
                </div>
            </Drawer>
            <Drawer
                mask={false}
                size={'large'}
                width={'60%'}
                closable={false}
                placement="right"
                open={true}
            >
                <div>
                    {/*基础信息*/}
                    {/*<div className={' w-full'}>*/}
                    {/*    <div className={'w-full bg-green-300 h-24'}></div>*/}
                    {/*    <div className={'relative top-2.5 text-2xl font-bold'}></div>*/}
                    {/*    <div  className={'relative top-9'}>*/}
                    {/*        123|123|123|123|123*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </Drawer>
        </div>
    );
}

export default Article;