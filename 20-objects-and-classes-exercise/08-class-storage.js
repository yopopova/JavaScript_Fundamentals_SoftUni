class Storage {
    constructor(capacity) {
        this.capacity = capacity,
        this.storage = []
    }

    get totalCost() {
        return this.storage.reduce((finalCost, el) => {
            return finalCost + (el.price * el.quantity);
        }, 0);
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        return;
    }

    getProducts() {
        let finalStorage = [];
        this.storage.map(el => finalStorage.push(JSON.stringify(el)));
        return finalStorage.join('\n');
    }
}