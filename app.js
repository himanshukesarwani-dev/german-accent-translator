// variables 
var inputText = document.querySelector("#text-input");
var outputText = document.querySelector("#text-output");
var btnTranslate = document.querySelector("#btn-translate");


// server URL

var serverURL = "https://api.funtranslations.com/translate/german-accent.json";

// URL Generator Function

function makeURL(text) {
    return serverURL + "?text=" + text;
}
