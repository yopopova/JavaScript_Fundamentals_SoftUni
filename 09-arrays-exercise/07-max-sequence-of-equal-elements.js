function maxSequenceOfEqualElements(arr) {
    let sequence = [];
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        let element = arr[i];
        let currentSequence = [element];

        for (let j = i + 1; j < arrL; j++) {
            let nextElement = arr[j];

            if (element === nextElement) {
                currentSequence.push(element);
            } else {
                break;
            }
        }

        if (sequence.length < currentSequence.length) {
            sequence = currentSequence;
        }
    }

    console.log(sequence.join(' '));
}