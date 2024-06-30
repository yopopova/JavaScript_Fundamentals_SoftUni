function solve() {
    let assocArr = {
        'one': 1,
        'two': 2,
        'three': 3
    };

    assocArr.four = 4; // A way to add 'key' and 'value' to a key in an object.
    assocArr['five'] = 5; // A way to add 'key' and 'value' to a key in an object.

    let key = 'six';
    // When 'key' is a variable, we can't write 'assocArrkey' because the object will assume it's a new key.
    
    assocArr[key] = 6;
    // We need to write it this way, because that's how we'll create a key with a value of 6.

    console.log(assocArr);
}

solve();