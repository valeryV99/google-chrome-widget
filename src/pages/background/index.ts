import reloadOnUpdate from 'virtual:reload-on-update-in-background-script'

reloadOnUpdate('pages/background')

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate('pages/content/style.scss')

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // if (changeInfo.status === "complete") {
  console.log('reloading, url:', { tab, changeInfo, url: tab.url })
  chrome.tabs.sendMessage(tabId, { action: 'reload' })
  // }
})

console.log('background loaded')
