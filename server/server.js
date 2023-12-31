import http from 'http';
import getVehicles from './fetchData.js';

let vehicles = await getVehicles();

http.createServer((req, res) => {
    const route = req.url.split("/")[1];
    if(route in vehicles){ // localhost:port/hello -> if "hello" in vehicles
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(vehicles[`${route}`]));
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("Route not found");
    }
    res.end();
}).listen(8080);