import { ActivationFunction } from "./Perceptron";

const MAX_SIZE = 10;

export const getRandomWeights = (cant) => {
    let w = [];
    for(let i=0; i<cant; i++)w.push(Math.floor(5-(Math.random() * 10)));
    return w;
}

export const convertPointsToArray = (points) => {
    let x = [];
    points.forEach((p) => {x.push([p.x, p.y, p.t])});
    return x;
}

export const getLine = (w) => {
    const [A, B, C] = w;
    let points = []
    let y = 0;
    for(let x=-MAX_SIZE; x<=MAX_SIZE; x += 0.1){
        y = ((-A*x)-C)/B
        if(y >= -MAX_SIZE && y <= MAX_SIZE)points.push({x, y})
    }
    if(points.length<2) return []

    return [points[0],points[points.length-1]]
}

export const getBackgroundPoints = (w) => {
    let points = []
    let b = w.pop()
    for(let x=-MAX_SIZE; x<=MAX_SIZE; x+=1){
        for(let y=-MAX_SIZE; y<=MAX_SIZE; y+=1){
            points.push({x, y,
                t: Number(ActivationFunction([x,y], w, b))
            })
        }
    }
    return points
}