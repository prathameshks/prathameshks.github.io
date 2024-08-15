const backendUrl = 'http://127.0.0.1:8000';
// const backendUrl = 'https://prathameshsable.pythonanywhere.com';

function setLoading(message){
    console.log('Loading :',message);
}

function offLoading(){
    console.log('Loading Complete');
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


