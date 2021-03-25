class Item {
    constructor(id = 'BGLO', name = 'Bagel', variant = 'Onion', price = 0.49) {
        this._id = id;
        this._name = name;
        this._variant = variant;
        this._price = price;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get variant() {
        return this._variant;
    }

    get price() {
        return this._price;
    }
}

module.exports = Item;