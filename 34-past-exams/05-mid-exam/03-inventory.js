function inventory(input) {
    let collectionOfItems = input.shift().split(', ');
    input.pop();

    for (let i = 0; i < input.length; i++) {
        let [command, item] = input[i].split(' - ');

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