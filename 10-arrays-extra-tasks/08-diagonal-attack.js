function diagonalAttack(input) {
    let matrix = [];

    while (input.length > 0) {
        matrix.push(input.shift().split(' ').map(Number));
    }

    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length - 1 - i];
        // ^ The elements that are diagonal.
    }

    if (primaryDiagonal === secondaryDiagonal) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if ((j !== matrix.length - 1 - i) && (j !== i)) {
                    // ^ For secondaryDiagonal and then for primaryDiagonal.
                    matrix[i][j] = primaryDiagonal;
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);