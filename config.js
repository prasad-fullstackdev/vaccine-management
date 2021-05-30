var appConfig = {};
if (window.location.hostname == "localhost") {
    appConfig = {
        apiUrl: "https://localhost:44318/api/",
        authUrl: "https://localhost:44318/api/Auth/",
        hubUrl: "https://localhost:44318/SignalHub",
        isProduction: false,
    }
} else {
    appConfig = {
        apiUrl: "https://e477d5836eb2.ngrok.io/api/",
        authUrl: "https://e477d5836eb2.ngrok.io/api/Auth/",
        hubUrl: "https://e477d5836eb2.ngrok.io/SignalHub",
        isProduction: true,
    }
    applyLiveSettings();
}

function applyLiveSettings() {
    console.log = function (log) {

    };
}
