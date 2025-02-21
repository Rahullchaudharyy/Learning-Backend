
import http from 'http'
import fs from 'fs'
import { productslist } from './product.js';

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url == '/products/create' && req.method == 'POST' && req.headers['content-type'] === 'application/json') {

        let Data = '';

        req.on('data', chunk => {
            Data += chunk.toString(); 
        });

        req.on('end', () => {
            try {
                const Result = JSON.parse(Data); 

                console.log(Data ? `Data: ${Result}` : undefined);

                const Products = {
                    name: Result.name,
                    category: Result.category,
                    price: Result.price
                };

                const lists = fs.readFile('./product.js',{ encoding: 'utf8', flag: 'r' })
                console.log('list',lists)

                productslist.push(Products)
                fs.writeFile('product.json', JSON.stringify(Products, null, 2), (err) => {
                    if (err) {
                      console.error('Error writing to file:', err);
                      res.writeHead(500, { 'Content-Type': 'application/json' });
                      res.end(JSON.stringify({ message: 'Internal Server Error' }));
                      return;
                    }
          
                    // Respond back to the client
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Product created successfully', product: Products }));
                  });

                console.log('This is also data dear', Products);

                // Respond back to the client
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Product created successfully', product: Products }));

            } catch (error) {

            }
        })
    }
})


server.listen(PORT, () => {
    console.log(`Server Started on the http://localhost:${PORT}`)
})




