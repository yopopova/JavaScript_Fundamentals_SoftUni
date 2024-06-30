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

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequenceOfEqualElements([4, 4, 4, 4]);
// maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);