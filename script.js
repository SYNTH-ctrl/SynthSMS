document.getElementById("openCalendar").addEventListener("click", function() {
    window.location.href = "https://calendar.google.com";
});

document.getElementById("sendSms").addEventListener("click", function() {
    window.location.href = "sms:?body=Lembrete: Você tem um evento importante!";
});

let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = "block";
});

installBtn.addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
            installBtn.style.display = "none";
        }
    });
});