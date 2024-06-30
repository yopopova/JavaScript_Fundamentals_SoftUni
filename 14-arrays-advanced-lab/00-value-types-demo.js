function solve() {
    // Value types have a copy of their valuer in the computer ie. there are 2 separate pieces of memory.

    let a = 10;
    let b = a;

    a += 5;

    console.log(a);
    console.log(b);
}

solve();