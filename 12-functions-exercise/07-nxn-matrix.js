function matrix(n) {
    function rows(num) {
        let firstRow = (num + ' ').repeat(num);
        return firstRow + '\n';
    }

    function columns(arg) {
        for(let i = 1; i <= arg; i++) {
            return rows(arg).repeat(arg - 1); // Here is -1, because we already have one row.
        }
    }

    return rows(n) + columns(n);
}

let result = matrix(3);
console.log(result);