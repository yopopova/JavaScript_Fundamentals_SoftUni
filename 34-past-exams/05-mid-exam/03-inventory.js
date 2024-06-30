function inventory(input) {
    let collectionOfItems = input.shift().split(', ');
    input.pop();

    for (let i = 0; i < input.length; i++) {
        let [command, item] = input[i].split(' - '); // We must add spaces on either side of the '-' because otherwise the commands will not be recognized further down the code.

        if (command === 'Collect') {
            if (!collectionOfItems.includes(item)) {
                collectionOfItems.push(item);
            }

        } else if (command === 'Drop') {
            if (collectionOfItems.includes(item)) {
                let index = collectionOfItems.indexOf(item);
                collectionOfItems.splice(index, 1);
            }

        } else if (command === 'Combine Items') {
            let [oldItem, newItem] = item.split(':');

            if (collectionOfItems.includes(oldItem)) {
                let oldItemIndex = collectionOfItems.indexOf(oldItem);
                collectionOfItems.splice(oldItemIndex + 1, 0, newItem);
            }

        } else if (command === 'Renew') {
            if (collectionOfItems.includes(item)) {
                let itemIndex = collectionOfItems.indexOf(item);
                collectionOfItems.splice(itemIndex, 1);
                collectionOfItems.push(item);
            }
        }
    }

    console.log(collectionOfItems.join(', '));
}

inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
inventory(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!']);