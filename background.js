console.log("i am in the bg");

chrome.tabs.onCreated.addListener(function (tab){
console.log("new tab created");

getData(tab);

//chrome.tabs.executeScript({file:"content.js"});
//chrome.tabs.insertCSS({file:"content.css"});
});
const url = "https://random.dog/woof.json";

async function getData(tab)
{
    const response = await fetch(url);
    const imageJson = await response.json();
    console.log( imageJson);
    //chrome.tabs.update(tab,{url: imageJson.url});
    chrome.tabs.update({url: "https://dogimages.glitch.me/"});
}
