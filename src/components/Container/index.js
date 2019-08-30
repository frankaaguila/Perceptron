import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Graphic from './Graphic';
import Canvas from './Canvas';
import CanvasControllers from './CanvasControllers';
import { getRandomWeights, convertPointsToArray, getLine, getBackgroundPoints } from '../../functions/Helpers';
import { Perceptron } from '../../functions/Perceptron';

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pointType: "positive",
            randomLine: [],
            finished: false,
            points: [],
            n: 0.5,
            epocas: 1000,
            w: [],
            result: [],
            resultLine: [],
            backgroundPoints: [],
            errorData: []
        }
    }

    addPoints = (e) => {
        if(!this.state.finished){
            let newPoints = this.state.points;
            let value = this.state.pointType === "positive"
            if(e){
                if(e.xValue && e.yValue){
                    newPoints.push({x: e.xValue, y: e.yValue, t: Number(value) });
                    this.setState({
                        points: newPoints
                    })
                }
            }
        }
    }

    togglePointsType = (e) => {
        if(!this.state.finished){
            this.setState({
                pointType: e.target.id
            })
        }
    }

    handleSlide = (e) => {
        if(!this.state.finished){
            this.setState({
                n: e.target.value
            })
        }
    }

    handleEpocas = (e) => {
        if(!this.state.finished){
            this.setState({
                epocas: e.target.value
            })
        }
    }

    handleGenerateWeights = () => {
        if(!this.state.finished){
            let weights = []
            let randomLine = []
            do{
                weights = getRandomWeights(3);
                randomLine = getLine(weights);
            }while(!randomLine.length)
            this.setState({
                w: weights,
                randomLine
            })
        }
    }

    handlePerceptron = () => {
        if(!this.state.finished){
            let w = this.state.w;
            let b = w.pop()
            let perceptronData = {
                w,
                b,
                n: Number(this.state.n),
                x: convertPointsToArray(this.state.points),
                epocas: Number(this.state.epocas),
            }
            if(!perceptronData.w.length || !perceptronData.x.length){
                alert("Faltan datos");
            }
            else{
                let [result, errorData] = Perceptron(perceptronData);
                let resultLine = getLine(result);
                let backgroundPoints = getBackgroundPoints(result);
                this.setState({
                    result,
                    resultLine,
                    backgroundPoints,
                    errorData,
                    finished: true,
                })
            }
        }
        else{
            document.location.reload();
        }
    }

    render() {
        return (
            <div className="Container">
                <Grid>
                    <Row>
                        <Col xs={12} md={9}>
                            <div className="title">Perceptrón</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={8}>
                            <Canvas
                                points={this.state.points}
                                randomLine={this.state.randomLine}
                                addPoints={this.addPoints}
                                resultLine={this.state.resultLine}
                                background={this.state.backgroundPoints}
                            />
                        </Col>
                        <Col xs={12} sm={4}>
                            <CanvasControllers
                                togglePointsType={this.togglePointsType}
                                handleSlide={this.handleSlide}
                                handleEpocas={this.handleEpocas}
                                n={this.state.n}
                                epocas={this.state.epocas}
                                handleGenerateWeights={this.handleGenerateWeights}
                                handlePerceptron={this.handlePerceptron}
                                reload={this.state.finished}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Graphic data={this.state.errorData}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Container;