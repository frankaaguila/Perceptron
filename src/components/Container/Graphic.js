import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line, ResponsiveContainer } from "recharts";

const Graphic = ({data}) => {
    return (
        <div className="graphic">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{top: 20, right: 40, left: 0, bottom: 5}}>
                    <XAxis dataKey={"epoca"} domain={[1,1000]}/>
                    <YAxis domain={[-1,1]}/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Line type="monotone" dataKey="error" stroke="#2196F3" activeDot={{r: 6}} strokeWidth={2}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Graphic;