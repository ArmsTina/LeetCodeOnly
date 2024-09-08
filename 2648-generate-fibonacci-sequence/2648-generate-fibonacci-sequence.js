/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let f = 0;
    let s = 1;
    yield f
    yield s
    while(true){
        yield f + s;
        let temp = f;
        f = s;
        s = temp+s;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */