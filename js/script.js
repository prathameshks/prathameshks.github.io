// const backendUrl = 'http://127.0.0.1:8000';
const backendUrl = 'https://prathameshsable.pythonanywhere.com';

function setLoading(message = "Loading..."){
    document.getElementById("loader_div").style.display = "flex";
    document.getElementById("loader_text").innerHTML = message;
    // console.log('Loading :',message);
}

function offLoading(){
    document.getElementById("loader_div").style.display = "none";
    // console.log('Loading Complete');
}

window.onload = async function () {
    fetch(backendUrl + '/api/', {
        method: 'POST', // Use POST for sending data
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Data to send to the backend
            screen_resolution: screen.width + 'x' + screen.height,
            referrer: document.referrer,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            language: navigator.language,
            url: window.location.href,
        })
    }).then(response => {
        if (response.ok) {
            console.log('Connected To Backend Successfully.')
        }else{
            console.error('Error Connection To Backend Failed!');
        }
    })
}


