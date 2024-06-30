function arrayManipulations(input) {
    let arr = input.shift().split(' ').map(Number);
    let inputL = input.length;

    function add(el) {
        arr.push(el);
    }

    function remove(num) {
        arr = arr.filter(el => el !== num);
    }

    function removeAt(index) {
        arr.splice(index, 1);
    }

    function insert(num, index) {
        arr.splice(index, 0, num);
    }

    for (let i = 0; i < inputL; i++) {
        let [command, firstEl, secondEl] = input[i].split(' ');
        firstEl = Number(firstEl);
        secondEl = Number(secondEl);

        if (command === 'Add') {
            add(firstEl);

        } else if (command === 'Remove') {
            remove(firstEl);

        } else if (command === 'RemoveAt') {
            removeAt(firstEl);

        } else if (command === 'Insert') {
            insert(firstEl, secondEl);
        }
    }

    console.log(arr.join(' '));
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);