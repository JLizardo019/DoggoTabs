
const url = "https://random.dog/woof.json";

window.addEventListener('load', getData()); // wait until the page loads

async function getData()
{
    const response = await fetch(url);
    const slothJson = await response.json();
    document.body.style.backgroundImage = url(slothJson.url);
    console.log( slothJson);
}


