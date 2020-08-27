const BASE = "https://swapi.dev/api/";
const result = document.querySelector('.result');


function getCharacters() {
    const id = selectEpisode();
    return axios
        .get(`https://swapi.dev/api/films/${id}/`)
        .then((res) => {
            return res.data.characters;
            console.log(res.data.characters);
        })
        .then((charLinks) => {
            const newLinks = [];
            for (let i = 0; i < charLinks.length; i++) {
                newLinks[i] = charLinks[i].replace("http://", "https://");
            }
            return Promise.all(
                newLinks.map((el) => {
                    return axios.get(el).then((res) => res.data);
                })
            );
        })
        .catch((err) => {
            console.log("Error!", err);
        });
    console.log(res.data.characters);
}



function showCharacters(characters) {
    result.innerHTML = "";
    characters.map((el) => {
        if (el.gender === "male") {
            el.gender = '<span>male</span>';
        } else if (el.gender === "female") {
            el.gender = '<span>female</span>';
        } else if (el.gender === "hermaphrodite") {
            el.gender = '<span>hermaphrodite</span>';
        } else if (el.gender === "n/a" || el.gender === "none") {
            el.gender = '<span>none</<span>';
        }
        const charElement = document.createElement("div");
        charElement.className = "result_item";
        charElement.innerHTML = `
        <p class="name">Name:  <span>${el.name}</span></p>
        <p class="birth">Birthday year:  <span>${el.birth_year}</span></p>
        <p class="gender">Gender:  <span>${el.gender}</span></p>`;
        result.append(charElement);
    });
}

function selectEpisode() {
    return document.getElementById("episode").value;
}

document.querySelector('button').addEventListener('click', function(){
    getCharacters().then(showCharacters);
});



let page = 1;

function getPlanets(page) {
    const config = {
        method: "GET",
        url: BASE + "planets/",
        params: {
            page,
        },
    };
    return axios(config).then((res) => res.data.results);
}

function showPlanet(planets) {
    result.innerHTML = "";
    planets.forEach((elem) => {
        const planetElement = document.createElement("div");
        planetElement.className = "result_item";
        planetElement.innerHTML = `
        <p class="name">Planet name:  <span>${elem.name}</span></p>
        <p class="birth">Population:  <span>${elem.population} souls</span></p>
        <p class="gender">Diameter:  <span>${elem.diameter} meters</span></p>`;
        result.append(planetElement);
    });
}

document.getElementById("planets-btn").addEventListener("click", () => {
    document.querySelector(".cntrl-btns").style.visibility = 'visible';
    getPlanets(1).then(showPlanet);
});

document.getElementById("prev-btn").addEventListener("click", () => {
    if (page <= 1) return;
    getPlanets(--page).then(showPlanet);
});
document.getElementById("next-btn").addEventListener("click", () => {
    if (page >= 6) return;
    getPlanets(++page).then(showPlanet);
});