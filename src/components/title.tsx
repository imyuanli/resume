import './index.css'
import React from "react";

interface props {
    title: string
}

const Title: React.FunctionComponent<props> = ({title}) => {
    return (
        <div className='title'>{title}</div>
    )
}
export default Title
