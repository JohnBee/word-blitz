export function SmartWordGenerator(){
    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
                    "P","Q","R","S","T","U","V","W","X","Y","Z"];

    const letterWeights = {"A": 7, "B": 2, "C": 3, "D": 4, "E": 12,
                           "F": 2, "G": 2, "H": 5, "I": 6, "J": 1,
                           "K": 1, "L": 4, "M": 3, "N": 6, "O": 8,
                           "P": 2, "Q": 1, "R": 6, "S": 6, "T": 9,
                           "U": 3, "V": 1, "W": 2, "X": 1, "Y": 2,
                           "Z": 1};
    let vowels = ["A","E","I","O","U"];
    let easyConsonants = ["B","C","D","F","G","H","K","L","M","N","P","R","S","T","W","Y"]
    let x = () => {
        let sum = 0.0;
        for(let k of Object.keys(letterWeights)){
            sum = sum + letterWeights[k];
        }
        return sum;
    }
    function countVowels(str){
        let count = 0;
        for(let c of str){
            if(vowels.indexOf(c)!== -1){
                count = count + 1;
            }
        }
        return count;
    }
    function countConsonants(str){
        let count = 0;
        for(let c of str){
            if(vowels.indexOf(c)=== -1){
                count = count + 1;
            }
        }
        return count;
    }
    function genWeightArray(){
        let arr = [];
        for(let k of Object.keys(letterWeights)){
            for(let i = 0; i < letterWeights[k]; i++){
                arr.push(k);
            }
        }
        return arr;
    }
    let weightedCharArr = genWeightArray();

    function generateArray() {
        let out = [];
        for(let i=0; i < 10; i++){
            out.push(weightedCharArr[Math.floor(Math.random()*weightedCharArr.length)])
        }
        // check if no vowels, then insert some
        if(countVowels(out) <= 1){
            for(let i = 0; i < out.length; i++){
                if(vowels.indexOf(out[i]) === -1){
                    out[i] = vowels[Math.floor(Math.random()*vowels.length)];
                }
            }
        }
        // check if no consonents, then insert some
        if(countConsonants(out) <= 1){
            for(let i = 0; i < out.length; i++){
                if(vowels.indexOf(out[i]) === -1){
                    out[i] = easyConsonants[Math.floor(Math.random()*easyConsonants.length)];
                }
            }
        }
        return out;
    }
    let generatedString = generateArray()
    console.log(generatedString);

    return generatedString;
}
