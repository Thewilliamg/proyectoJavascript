const _private = new WeakMap();

class Book {
    constructor(title,author,price){
        const properties = {
            _title:title,
            _author:author,
            _price:price
        }

        _private.set(this,{properties});
    }
    get title() {
        return _private.get(this).properties['_title']
    }
    set title() {}
}

class Seller {

}