export const ActivationFunction = (x, w, b) => {
    let z = 0;
    for(let i in w) z += w[i] * x[i]
    z += b
    return z>0
}

const getError = (t, a) => {
    return (t-a)
}

const updateWeights = (w, b, x, error, n) => {
    for(let i in w){
        w[i] = w[i] + (n * error * x[i]);
    }
    b += (error * n);
    return [w, b]
}

export const Perceptron = ({w, b, n, x, epocas}) => {
    let done = false;
    let z = 0;
    let error = 0;
    let errorData = []
    let epoca = 0;
    while(!done && epoca < epocas){
        done = true;
        for(let i in x){
            z = ActivationFunction(x[i], w, b)
            error = getError(x[i][x[i].length-1], Number(z));
            if(error !== 0){
                done = false;
                [w, b] = updateWeights(w, b, x[i], error, n)
            }
        }
        errorData.push({epoca, error});
        epoca++;
    }
    w.push(b)
    return [w, errorData]
}