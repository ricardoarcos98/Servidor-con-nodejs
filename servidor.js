const port =8000;
const hostname='localhost'
const chalk=require('chalk');
const http=require('http');
const server=http.createServer((req, res)=>{
    if(req.method==='GET' && req.url==='/datos'){
        res.setHeader('Content-Type','application/json');
        res.statusCode=200;
        const respuesta={
            nombre:'Ricardo',
            mensaje:'Hola desde mi servidor Node.js'
        }
        res.end(JSON.stringify(respuesta));
    }
});

server.listen(port,()=>{
    console.log(chalk.green(`Servidor corriendo en http://${hostname}:${port}/`))
})