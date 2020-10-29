function sum() {
    return this.x + this.y;
}

console.log( sum.call( { x : 10, y : 20 } ) );