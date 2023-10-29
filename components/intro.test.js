
const fs = require('fs');
const path = require('path');
test ("verifica texto", () =>{
    const data = fs.readFileSync(path.resolve('components/intro.js'), 'utf8');
    expect(data).toMatch(/Blog/);
})