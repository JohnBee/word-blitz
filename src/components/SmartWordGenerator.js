export function SmartWordGenerator(){
    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
                    "P","Q","R","S","T","U","V","W","X","Y","Z"];

    const letterWeights = {"A": 7, "B": 2, "C": 3, "D": 4, "E": 12,
                           "F": 2, "G": 2, "H": 5, "I": 6, "J": 1,
                           "K": 1, "L": 4, "M": 3, "N": 6, "O": 8,
                           "P": 2, "Q": 1, "R": 6, "S": 6, "T": 9,
                           "U": 3, "V": 1, "W": 2, "X": 1, "Y": 2,
                           "Z": 1};
    let x = () => {
        let sum = 0.0;
        for(let k of Object.keys(letterWeights)){
            sum = sum + letterWeights[k];
        }
        return sum;
    }
    const genWeightArray = () => {
        let arr = [];
        for(let k of Object.keys(letterWeights)){
            for(let i =0; i < letterWeights[k]; i++){
                arr.push(k);
            }
        }
        return arr;
    }
    let weightedCharArr = genWeightArray();
    let out = [];
    for(let i=0; i < 10; i++){
        out.push(weightedCharArr[Math.floor(Math.random()*weightedCharArr.length)])
    }

    return out;
}
