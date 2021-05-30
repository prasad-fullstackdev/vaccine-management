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
        apiUrl: "https://a926590cdf1b.ngrok.io/api/",
        authUrl: "https://a926590cdf1b.ngrok.io/api/Auth/",
        hubUrl: "https://a926590cdf1b.ngrok.io/SignalHub",
        isProduction: true,
    }
    applyLiveSettings();
}

function applyLiveSettings() {
    console.log = function (log) {

    };
}
