//requireds
const fs = require('fs');






let base = 2;
let data = '';


for (let i = 1; i < 10; i++) {
    data += `${base}*${i}=${base*i}\n`;
    console.log(data);
}


fs.writeFile(`Tablas/tabla${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado!');
});