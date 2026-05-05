// Content script to listen for P key press and toggle PiP
document.addEventListener('keydown', (event) => {
  // Check if the pressed key is 'P' or 'p'
  if (event.key === 'p' || event.key === 'P') {
    // Ignore if user is typing in an input field
    if (event.target.tagName === 'INPUT' || 
        event.target.tagName === 'TEXTAREA' || 
        event.target.isContentEditable) {
      return;
    }

    // Find the first video element on the page
    const video = document.querySelector('video');
    
    if (!video) {
      console.log('No video element found on this page');
      return;
    }

    // Toggle Picture-in-Picture mode
    if (document.pictureInPictureElement) {
      // Exit PiP if already active
      document.exitPictureInPicture()
        .then(() => console.log('Exited Picture-in-Picture mode'))
        .catch(error => console.error('Error exiting PiP:', error));
    } else {
      // Enter PiP if not active
      if (document.pictureInPictureEnabled && video.readyState >= 1) {
        video.requestPictureInPicture()
          .then(() => console.log('Entered Picture-in-Picture mode'))
          .catch(error => console.error('Error entering PiP:', error));
      } else if (!document.pictureInPictureEnabled) {
        console.log('Picture-in-Picture is not enabled in this browser');
      } else {
        console.log('Video is not ready for PiP yet');
      }
    }
  }
});

// Auto-skip YouTube ads functionality
function autoSkipAds() {
  // Try to find and click the skip button
  const skipButton = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern, button.ytp-ad-skip-button-container');
  
  if (skipButton) {
    console.log('Ad skip button found, clicking...');
    skipButton.click();
  }
}

// Observe DOM changes to detect when ads appear
const observer = new MutationObserver(() => {
  autoSkipAds();
});

// Start observing the document body for changes
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Also check periodically in case the mutation observer misses something
setInterval(autoSkipAds, 500);
