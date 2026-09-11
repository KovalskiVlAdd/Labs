const http = require('http');

const fio = "Kovalko V.C.";
const group = "478";
const n = 5;

let sum = 0, sign = 1;

for (let k = 0; k < 100000; k++) {
    sum += sign / (2 * k + 1);
    sign = -sign;
}
const pi = (4 * sum).toFixed(n);

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
        <p>FIO: ${fio}</p>
        <p>Group: ${group}</p>
        <p>Pi: ${pi}</p>`);
});

server.listen(3000, () => {
    console.log("Сервер запущен!!");
});