const CACHE='juandafit-mobile-fast-v1';
const CORE=[
  './assets/app.js',
  './assets/logo.webp',
  './assets/ex-imgs.json',
  'https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js',
  'https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js'
];
self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE).catch(()=>null)));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(req.mode==='navigate'){
    event.respondWith(fetch(req).then(resp=>{
      const clone=resp.clone(); caches.open(CACHE).then(c=>c.put(req,clone)); return resp;
    }).catch(()=>caches.match(req)));
    return;
  }
  const cacheable=url.origin===location.origin || /cdn\.jsdelivr\.net|unpkg\.com|www\.gstatic\.com/.test(url.hostname);
  if(!cacheable) return;
  event.respondWith(caches.match(req).then(cached=>cached || fetch(req).then(resp=>{
    if(resp && (resp.ok || resp.type==='opaque')){ const clone=resp.clone(); caches.open(CACHE).then(c=>c.put(req,clone)); }
    return resp;
  })));
});
