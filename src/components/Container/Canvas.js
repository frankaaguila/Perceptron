import React, { Component } from 'react';
import { ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Scatter, Cell, ResponsiveContainer } from "recharts";

class Canvas extends Component {
    render() {
        return (
            <div className="canvasContainer">
                <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart margin={{top: 20, right: 20, bottom: 0, left: 0}} onClick={this.props.addPoints}>
                        <XAxis type="number" dataKey={'x'} name='x' domain={[-10,10]}/>
                        <YAxis type="number" dataKey={'y'} name='y' domain={[-10,10]}/>
                        <CartesianGrid /> 
                        <Tooltip cursor={{strokeDasharray: '3 3'}}/>
                        <Scatter name='Random' data={this.props.randomLine} fill='green' line={{stroke: 'green', strokeWidth: 3}} />
                        <Scatter name='Background' data={this.props.background} fill='#8884d8' >
                            {
                                this.props.background.map((entry, index) => {
                                    return <Cell key={`cell2-${index}`} fill={entry.t===1 ? "#c3e2e6" : "#e6c3c3"} />
                                })
                            }
                        </Scatter>
                        <Scatter name='Graph' data={this.props.points} fill='#8884d8'>
                            {
                                this.props.points.map((entry, index) => {
                                    return <Cell key={`cell-${index}`} fill={entry.t===1 ? "#2196F3" : "red"} />
                                })
                            }
                        </Scatter>
                        <Scatter name='Result' data={this.props.resultLine} fill='lime' line={{stroke: 'lime', strokeWidth: 3}} />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default Canvas;