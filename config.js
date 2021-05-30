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
        authurl: "https://53db6c6789ce.ngrok.io/auth/",
        huburl: "https://53db6c6789ce.ngrok.io/signalhub",
        isproduction: true,
    }
    applyLiveSettings();
}

function applyLiveSettings() {
    console.log = function (log) {

    };
}
