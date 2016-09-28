//Register the service worker if available.
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').then(function(reg) {
        console.log('Successfully registered service worker', reg);
    }).catch(function(err) {
        console.warn('Error whilst registering service worker', err);
    });
}

window.addEventListener('online', function(e) {
    // Resync data with server.
    console.log("You are online");
    // Page.hideOfflineWarning();
    // window.location = '/';
}, false);

window.addEventListener('offline', function(e) {
    // Queue up events for server.
    console.log("You are offline");
    // window.location = '/offline.html';
}, false);

// Check if the user is connected.
if (navigator.onLine) {
    // Arrivals.loadData();
    
    // document.getElementById('no-signal').classList.add('hidden');

} else {
    // Show offline message
    // window.location = '/404';
   // document.getElementById('no-signal').classList.add('hidden');
    // Page.showOfflineWarning();

}