async function getPlanets(){
    let planets: any[] = [];
    const category = 'planets';
    const planetsParts = [
        await sendRequest(1, category),
        await sendRequest(2, category),
        await sendRequest(3, category),
        await sendRequest(4, category),
        await sendRequest(5, category),
        await sendRequest(6, category),
    ];
    for(let i = 0; i < planetsParts.length; i++){
        planets = planets.concat(planetsParts[i]);
    }
    return planets;
}

async function getPeoples(){
    let peoples: any[] = [];
    const category = 'people';
    const planetsParts = [
        await sendRequest(1, category),
        await sendRequest(2, category),
        await sendRequest(3, category),
        await sendRequest(4, category),
        await sendRequest(5, category),
        await sendRequest(6, category),
        await sendRequest(7, category),
        await sendRequest(8, category),
        await sendRequest(9, category),
    ];
    for(let i = 0; i < planetsParts.length; i++){
        peoples = peoples.concat(planetsParts[i]);
    }
    return peoples;
}

function sendRequest(page: any, category: any){
    return fetch(`https://swapi.dev/api/${category}/?page=${page}`)
    .then(response => response.json())
    .then(response => response.results);
}

let planets = getPlanets();
let peoples = getPeoples();

export {planets, peoples}
