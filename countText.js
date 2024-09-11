const readline = require('readline');

class CountText {
    constructor(string) {
        this.string = string;
    }

    countLetterA() {
        return this.string.toLowerCase().split('a').length - 1;
    }

    displayCount() {
        const count = this.countLetterA();
        if (count > 0) {
            console.log(`A letra 'a' aparece ${count} vezes na string.`);
        } else {
            console.log("A letra 'a' não aparece na string.");
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe uma palavra: ', (input) => {
    const text = (input);
    const count1 = new CountText(text);
    count1.displayCount();
    rl.close();
});
