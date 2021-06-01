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
        apiUrl: "https://f6b4e0189747.ngrok.io/api/",
        authUrl: "https://f6b4e0189747.ngrok.io/api/Auth/",
        hubUrl: "https://f6b4e0189747.ngrok.io/SignalHub",
        isProduction: true,
    }
    applyLiveSettings();
}

function applyLiveSettings() {
    console.log = function (log) {

    };
}