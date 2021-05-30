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
        apiUrl: "https://c94d4c5844f2.ngrok.io/api/",
        authUrl: "https://c94d4c5844f2.ngrok.io/api/Auth/",
        hubUrl: "https://c94d4c5844f2.ngrok.io/SignalHub",
        isProduction: true,
    }
    applyLiveSettings();
}

function applyLiveSettings() {
    console.log = function (log) {

    };
}
