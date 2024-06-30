function gladiatorInventory(input) {
    let inventory = input.shift().split(' ');
    let inputL = input.length;

    for (let i = 0; i < inputL; i++) {
        let [command, item] = input[i].split(' ');
        let index = inventory.indexOf(item);

        if (command === 'Buy') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }

        } else if (command === 'Trash') {
            if (inventory.includes(item)) {
                inventory.splice(index, 1);
            }

        } else if (command === 'Repair') {
            if (inventory.includes(item)) {
                let reparedItem = inventory.splice(index, 1);
                inventory.push(...reparedItem);
            }

        } else if (command === 'Upgrade') {
            let [equipment, upgrade] = item.split('-');

            if (inventory.includes(equipment)) {
                let indexEquipment = inventory.indexOf(equipment);
                inventory.splice(indexEquipment + 1, 0, `${equipment}:${upgrade}`)
            }
        }
    }

    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);