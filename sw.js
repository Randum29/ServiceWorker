self.addEventListener('push', event => {

  const title = 'New message';

  const options = {

    body: 'You have a new message.',



    actions: [

      {action: 'view', title: 'View message'},

      {action: 'dismiss', title: 'Dismiss'},

    ]

  };

  event.waitUntil(self.registration.showNotification(title, options));

});

