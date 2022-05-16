// Cristiano
// ICS2O-Unit6-02-HTML
// May 16 2022

'use strict'
/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-02-HTML/sw.js", {
    scope: "/ICS2O-Unit6-02-HTML/",
  })
}

/**
 * Updates the click counter.
 */
function updateCount() {
  if (localStorage.clicks) {
    document.getElementById("times-clicked-text").innerHTML = "<h5>Times Clicked: " + localStorage.clicks + "</h5>"
  } else {
    localStorage.clicks = 0
  }
}
/**
 * Resets the click counter to 0.
 */
function resetProgress() {
  localStorage.clicks = 0
  updateCount()
}

/**
 * Adds one to the click counter.
 */
function onClick() {
  localStorage.clicks++
  updateCount()
}
