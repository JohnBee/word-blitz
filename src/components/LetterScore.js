export const letterScore = {
    'A': 90,
    'B': 20,
    'C': 50,
    'D': 30,
    'E': 110,
    'F': 20,
    'G': 20,
    'H': 30,
    'I': 80,
    'J': 80,
    'K': 11,
    'L': 50,
    'M': 30,
    'N': 70,
    'O': 70,
    'P': 30,
    'Q': 2,
    'R': 80,
    'S': 60,
    'T': 70,
    'U': 40,
    'V': 10,
    'W': 10,
    'X': 2,
    'Y': 2,
    'Z': 2
};
export function getScore(char){
    return Math.round((200-letterScore[char])/10);
}
