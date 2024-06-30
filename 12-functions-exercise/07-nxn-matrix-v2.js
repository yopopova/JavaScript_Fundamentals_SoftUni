function matrix(n) {
    function rows(num) {
        let firstRow = (num + ' ').repeat(num);
        return firstRow + '\n';
    }

    function columns(arg) {
        for(let i = 1; i <= arg; i++) {
            return rows(arg).repeat(arg);
        }
    }

    return columns(n);
}

let result = matrix(3);
console.log(result);