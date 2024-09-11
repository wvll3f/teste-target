const readline = require('readline');

class SumCalc {
    constructor(indice) {
        this.indice = indice;
        this.soma = 0;
        this.k = 1;
    }

    Sum() {
        while (this.k < this.indice) {
            this.k = this.k + 1;
            this.soma = this.soma + this.k;
        }
    }

    displaySum() {
        this.Sum();
        console.log(this.soma); 
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe um número para verificar: ', (input) => {
    const number = parseInt(input);
    const calc1 = new SumCalc(number);
    calc1.displaySum();
    rl.close();
});
