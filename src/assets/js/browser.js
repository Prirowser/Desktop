function back() {
    if (document.querySelector('webview').canGoBack) {
        document.querySelector('webview').goBack();
    }
}

function forward() {
    if (document.querySelector('webview').canGoForward) {
        document.querySelector('webview').goForward();
    }
}