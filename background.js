chrome.runtime.setUninstallURL("https://squiz.gg", () => {});
chrome.runtime.onInstalled.addListener((details) => {installReason(details)})

let installReason = (detail) => {
    if (detail.reason === "install") {
        chrome.tabs.create({
            url: "Pages/install.html"
        })
    }
}