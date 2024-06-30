function lastKNumbersSequance(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let elements = result.slice(-k); // Will return only as many elements as there are, if the elements available are less than in the condition, it will return only those.
        // If we try to get something after the end or before the beginning of the array, slice() will return nothing if there are no more elements.
        // Will return only the elements that are available in the array. It will just return fewer elements than we told it to return.
        let current = 0;

        for (let num of elements) {
            current += num;
        }

        result.push(current);
    }

    console.log(result.join(' '));
}

lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);
lastKNumbersSequance(9, 5);