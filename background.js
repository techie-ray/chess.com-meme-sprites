let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
});


console.log("I am the background script")

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(request.load)
    // console.log(sender.tab ?
    //             "from a content script:" + sender.tab.url :
    //             "from the extension");
    // if (request.greeting === "hello")
    //   sendResponse({farewell: "goodbye"});
  }
);