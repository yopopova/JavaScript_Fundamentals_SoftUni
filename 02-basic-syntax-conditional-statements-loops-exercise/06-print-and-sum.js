function printAndSum(start, end) {
    let startNum = start;
    let endNum = end;
    let sum = 0;
    let buffer = "";

    for (let i = startNum; i <= endNum; i++) {
        buffer += i + " ";
        sum += i;
    }

    console.log(buffer);
    console.log(`Sum: ${sum}`);
}