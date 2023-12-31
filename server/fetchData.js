const gpsPosAPI = 'https://ckan2.multimediagdansk.pl/gpsPositions?v=2';

async function fetchJSON(){
    let res = await fetch(gpsPosAPI);
    return res.json();
}
async function getVehicles(){
    let data = await fetchJSON();
    data = data["vehicles"];
    let vehiclesArr = [];
    
    for (const obj of data) {
        const result = {};
        const key = obj.routeShortName;
        result[key] = {
            lat: obj.lat,
            lon: obj.lon,
            delay: obj.delay
        };
        vehiclesArr.push(result);
    }
    const vehicles = Object.assign({}, ...vehiclesArr);
    return vehicles;
}

export default getVehicles;