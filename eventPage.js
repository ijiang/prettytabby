//contains content similar to that of background.js
//need to figure out where the alarm functions should be in... in eP or bg?

chrome.alarms.create('breakTime', periodInMinutes(2));

chrome.alarms.onAlarm.addListener(function(alarm))
{
	alert("testing!");
chrome.notifications.create('reminder', {
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Hello?!',
        message: 'You\'ve been working hard! Take a 5 min break! :)'
     }, function(notificationId) {});
};