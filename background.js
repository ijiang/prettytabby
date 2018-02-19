//currently not working
//use alarm API instead
//intended function is to have a notification pop up every hour to remind one to take a break
setInterval(notificationId, 2 * 60 * 1000)
//creates a desktop notification kind of like the ones fb makes when you receive a message
chrome.notifications.create('reminder', {
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Hello?!',
        message: 'You\'ve been working hard! Take a 5 min break! :)'
     }, function(notificationId) {});
  }
}