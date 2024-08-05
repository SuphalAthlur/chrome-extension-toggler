const extensionId = "kgejglhpjiefppelpmljglcjbhoiplfn";

// Function to update the icon based on the extension's enabled state
function updateIcon() {
    chrome.management.get(extensionId, function(extensionInfo) {
        if (extensionInfo) {
            const iconPath = extensionInfo.enabled ? "icons/enabled" : "icons/disabled";
            const iconExtension = '.png';
            chrome.action.setIcon({ path: {
                "16": `${iconPath}-16${iconExtension}`,
                "32": `${iconPath}-32${iconExtension}`
            }}, () => {
                if (chrome.runtime.lastError) {
                    console.error("Failed to set icon:", chrome.runtime.lastError.message);
                }
            });
        } else {
            console.error("Failed to get extension info:", chrome.runtime.lastError.message);
        }
    });
}

// Event listener for clicks on the extension icon
chrome.action.onClicked.addListener(() => {
    chrome.management.get(extensionId, function(extensionInfo) {
        if (extensionInfo) {
            const newState = !extensionInfo.enabled; // Toggle the state
            chrome.management.setEnabled(extensionId, newState, updateIcon());
        } else {
            console.error("Failed to get extension info:", chrome.runtime.lastError.message);
        }
    });
});

// Event listener for when the extension is loaded
chrome.runtime.onInstalled.addListener(() => {
    updateIcon();
});

// Event listener for when the extension is enabled
chrome.management.onEnabled.addListener((extensionInfo) => {
    if (extensionInfo.id === extensionId) {
        updateIcon();
    }
});

// Event listener for when the extension is disabled
chrome.management.onDisabled.addListener((extensionInfo) => {
    if (extensionInfo.id === extensionId) {
        updateIcon();
    }
});

