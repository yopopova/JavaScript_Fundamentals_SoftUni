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