
chrome.contextMenus.create({
    "title": "36 to 10",
    "contexts": ["selection"],
    "onclick": function (info, tab) {
        chrome.tabs.sendMessage(tab.id, convert36to10(info.selectionText));
    }
});
