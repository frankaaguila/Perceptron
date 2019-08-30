import React, { Component } from 'react';
import styles from './../../css/CanvasControllers.module.css';

class CanvasControllers extends Component {
    render() {
        return (
            <div className={styles.canvasControllers}>
                <div className={styles.radiosContainer}>
                    <div className={styles.radiosTitle}>Elementos a clasificar</div>
                    <div>
                        <label className={styles.radiosLabel}>
                            <input type="radio" defaultChecked className={styles.radio} name="type" id="positive" onClick={this.props.togglePointsType}/>
                            <span className={styles.checkmark}></span>
                            Clase A
                        </label>
                        <label className={styles.radiosLabel}>
                            <input type="radio" className={styles.radio} name="type" id="negative" onClick={this.props.togglePointsType}/>
                            <span className={styles.checkmark}></span>
                            Clase B
                        </label>
                    </div>
                </div>
                <div className={styles.rangeContainer}>
                    <div className={styles.rangeTitle}>&eta; = {this.props.n}</div>
                    <div className={styles.rangeSliderContainer}>
                        <div className={styles.rangeText}>0.1</div>
                        <div className={styles.slideContainer}>
                            <input type="range" name="points" min={0.1} max={1} step={0.1} value={this.props.n} className={styles.range} onChange={this.props.handleSlide}/>
                        </div>
                        <div className={styles.rangeText}>1</div>
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <div className={styles.inputTitle}>Épocas</div>
                    <input className={styles.input} value={this.props.epocas} onChange={this.props.handleEpocas} type="number" min={1} max={1000}/>
                </div>
                <button className={styles.initButton} onClick={this.props.handleGenerateWeights}>Generar pesos</button>
                <br/>
                <button className={this.props.reload ? styles.reloadButton : styles.startButton} onClick={this.props.handlePerceptron}>{this.props.reload ? "Reiniciar" : "Perceptrón"}</button>
            </div>
        );
    }
}

export default CanvasControllers;