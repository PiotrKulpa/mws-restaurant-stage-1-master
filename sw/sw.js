self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('ver1').then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        'restaurant.html',
        'favicon.ico',
        'data/restaurants.json',
        'css/style.css',
        'js/main.js',
        'js/dbhelper.js',
        'js/restaurant_info.js',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        return caches.open('ver1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
