let symbols = "!@#$%^&*>,".split("");

let pickSymbol = Math.floor(Math.random() * symbols.length);

let pick = symbols.splice(pickSymbol, 1);

for (let i = 0; i < 99; i++) {
    if (i % 9 == 0) {
        console.log(i + " - " + pick);
    } else {
        console.log(i + " - " + symbols[Math.floor(Math.random() * symbols.length)]);
    }
}
