import './index.css'
import React from "react";

interface props {
    title: string
}

const Title: React.FunctionComponent<props> = ({title}) => {
    return (
        <div className='w-full flex justify-between items-center mb-4'>
            <div className='title'>{title}</div>
        </div>
    )
}
export default Title
