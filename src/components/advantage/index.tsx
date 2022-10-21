import React, {useEffect, useState} from "react";
import Title from "../title";
import FormItem from "../form-item";

interface props {
    data: object,
    setData: any
}

const Advantage: React.FunctionComponent<props> = ({data, setData}) => {
    //这个组件的属性
    const TYPE = 'advantages'
    const [advantages, setAdvantages] = useState(data['advantages'])

    const handleChangeData = (key: string, value: any) => {
        setAdvantages(value)
    }
    useEffect(() => {
        setData({
            advantages
        })
    }, [advantages])
    return (
        <div className='advantages mt-12'>
            <Title title={"个人优势"}/>
            <FormItem
                handleChangeData={handleChangeData}
                isTextArea
                dataType={TYPE}
                dataKey={TYPE}
            />
        </div>
    );
}
export default Advantage
