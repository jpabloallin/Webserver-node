import http from 'http';

http.createServer( ( req, res ) => {

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' })

    // res.write('id, nombre\n');
    // res.write('1, juan\n');
    // res.write('2, kelly\n');
    // res.write('3, carlos\n');
    // res.write('2, sara\n');
    // res.end();
})
.listen(8080);

console.log('puerto ', 8080);

