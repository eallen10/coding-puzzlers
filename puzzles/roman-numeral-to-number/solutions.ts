import { Solutions } from '../models/Solutions';

function solution(romanNumeral: string) {
    const rnMap: any = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    const specialCases: any = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    };
    let runningTotal = 0;

    for(let i=0; i < romanNumeral.length; i++) {
        const currentChar = romanNumeral.charAt(i);
        const specialCaseValue = specialCases[currentChar + romanNumeral.charAt(i+1)];
        if(specialCaseValue) {
            runningTotal += specialCaseValue;
            i++;
        } else {
            runningTotal += rnMap[currentChar];
        }
    }

    return runningTotal;
}

export default { solution } as Solutions;