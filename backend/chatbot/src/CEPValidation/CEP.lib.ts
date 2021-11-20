/**
 * Implementação da requisição em NodeJS
 */

 const https = require('https');

 function jsonp(url, timeout) {
     return new Promise(function(resolve, reject) {
         // Cria uma solicitação HTTP
         const req = https.get(url, (res) => {
             // Se o status não for 2XX, retorna um erro
             if (res.statusCode < 200 || res.statusCode >= 300) {
                 return reject(res.statusMessage);
             }
 
             let data = '';
             res.on('data', chunk => { data += chunk; });
             res.once('end', () => { resolve(JSON.parse(data)); });
         });
 
         req.once('error', e => { reject(e.message); });
         req.setTimeout(timeout);
     });
 }