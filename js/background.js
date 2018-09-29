chrome.runtime.onMessage.addListener(function(r, s) {
  chrome.tabs.update(s.tab.id, {url: r.url});
});
