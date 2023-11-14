async function getDataAsync() {
    console.log("Starting");
    const films = await fetch("https://swapi.co/api/films/");
    console.log("Done!");
    console.log(films.status);
}

function getData() {
    console.log("Starting");
    fetch("https://swapi.co/api/films/")
        .then((res) => {
            console.log(res.status);
        })
        .catch((err) => {
            console.error("An error ocurred!", err);
        });
    console.log("Ending");
}
getData();
