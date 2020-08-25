const request = axios.get('http://swapi.dev/api/films/2');

console.log(request);

request.then((res) => {
    console.log(res);
});

