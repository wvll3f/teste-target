const readline = require('readline');

class Fibonacci {
    constructor(number){
        this.number = number;
    }

    isFibonacci(){
        let a = 0, b = 1;
        while(b<= this.number){
            if(b===this.number){
                return true;
            }
            [a,b] = [b,a+b];
        }

        return this.number ===0;
    }

    checkNumber(){
        if(this.isFibonacci()){
            console.log(`O numero ${this.number} pertence a sequência de Fibonacci`)
        } else {
            console.log(`O numero ${this.number} não pertence a sequência de Fibonacci`)
        }
    }

}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe um número para verificar: ', (input) => {
    const number = parseInt(input);
    const fib1 = new Fibonacci(number);
    fib1.checkNumber();
    rl.close();
});

