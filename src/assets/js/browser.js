function back() {
    document.getElementById('webview').goBack();
}

function forward() {
    document.getElementById('webview').goForward();
}

document.getElementById('urlbar').addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        let https = document.getElementById('urlbar').value.slice(0, 8).toLowerCase();
        let http = document.getElementById('urlbar').value.slice(0, 7).toLowerCase();
        if (https === 'https://') {
            document.getElementById('webview').loadURL(document.getElementById('urlbar').value);
        } else if (http === 'http://') {
            document.getElementById('webview').loadURL(document.getElementById('urlbar').value);
        } else {
            document.getElementById('webview').loadURL('http://' + document.getElementById('urlbar').value);
        }
    }
});