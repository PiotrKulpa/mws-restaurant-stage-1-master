self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('restaurant-static').then(function(cache) {
      return cache.addAll([
        '/css/styles.css',
        'index.html',
        'restaurant.html',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/data/restaurants.json',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg'
      ])
    })
  )
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  )
});

// self.addEventListener('activate', function (event) {
//     event.waitUntil(
//         caches.keys().then(function(keys){
//             return Promise.all(keys.map(function(key, i){
//                 if(key !== 'restaurant-static'){
//                     return caches.delete(keys[i]);
//                 }
//             }));
//         })
//     );
// });
