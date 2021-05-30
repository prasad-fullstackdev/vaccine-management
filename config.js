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
        apiUrl: "https://53db6c6789ce.ngrok.io/api/",
        authUrl: "https://53db6c6789ce.ngrok.io/auth/",
        hubUrl: "https://53db6c6789ce.ngrok.io/signalhub",
        isProduction: true,
    }
    applyLiveSettings();
}

function applyLiveSettings() {
    console.log = function (log) {

    };
}
