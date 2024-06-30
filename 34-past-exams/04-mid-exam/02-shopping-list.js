function shoppingList(input) {
    let list = input.shift().split('!');
    let line = input.shift();

    while (true) {

        if (line === "Go Shopping!") {
            break;
        }

        let [command, ...groceries] = line.split(' ');
        let productOne = groceries[0];
        let productTwo = groceries[1];

        let index = list.indexOf(productOne);

        if (command === 'Urgent') {
            if (!list.includes(productOne)) {
                list.unshift(productOne);
            }

        } else if (command === 'Unnecessary') {
            if (list.includes(productOne)) {
                list.splice(index, 1);
            }

        } else if (command === 'Correct') {
            if (list.includes(productOne)) {
                list.splice(index, 1, productTwo);
            }

        } else if (command === 'Rearrange') {
            if (list.includes(productOne)) {
                let removedProduct = list.splice(index, 1);
                list.push(removedProduct[0]);
            }
        }

        line = input.shift();
    }

    console.log(list.join(', '));
}

shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana", "Urgent Salt", "Unnecessary Grapes", "Correct Pepper Onion", "Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"]);