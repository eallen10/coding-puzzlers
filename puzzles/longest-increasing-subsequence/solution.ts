function trivialSolution(sequence: number[]) {
    let longestSeq = 0;
    
    for(let i=0; i < sequence.length; i++) {
        let currentLongestSeq = [];
        currentLongestSeq.push(sequence[i]);

        for(let j = i+1; j < sequence.length; j++) {
            if(sequence[j] > sequence[j-1]) {
                currentLongestSeq.push(sequence[j]);
            } else if(sequence[j] > sequence[j-2] && sequence[j] < sequence[j-1]) {
                currentLongestSeq[currentLongestSeq.length-1] = sequence[j];
            }
        };

        if(currentLongestSeq.length > longestSeq) {
            longestSeq = currentLongestSeq.length;
        }
    };

    return longestSeq;
}

export { trivialSolution }