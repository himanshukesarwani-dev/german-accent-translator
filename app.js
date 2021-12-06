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

//event handler function called when click happens

btnTranslate.addEventListener("click", eventHandlerFunction)


// error function

function errorHandler(error) {
    console.log("Troubles from Server: Try again later!", error);
    alert("Sorry! The server is causing some issues. Please try again later:")
}
// event handler function 

function eventHandlerFunction()
{
    var text = inputText.value;

    fetch(makeURL(text))
    .then(respone => Response.json())
    .then(json => outputText.innerText = json.contents.translated)
    .catch(errorHandler)

}