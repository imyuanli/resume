import React from 'react';
import {useRoutes} from 'react-router-dom'
import './App.css'
import routes from "./router";

const App: React.FC = () => {
    const views = useRoutes(routes)
    return (
        <div>
            <div className="App">
                {views}
            </div>
        </div>
    )
}
export default App;