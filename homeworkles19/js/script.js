let mass = [5,3,10,7,1,10,'Hello',"100"];


Array.prototype.sum = function () {
    let sum = 0;

    for(let i = 0; i < this.length; i++){
        if (!isNaN(Number(this[i]))) {
            sum += Number(this[i]);
        }

    }
    return sum;
}

console.log(mass.sum());





