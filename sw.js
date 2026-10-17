const CACHE = "skyace200-v6";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const page = e.request.mode === "navigate" || /\/$|\.html$/.test(new URL(e.request.url).pathname);
  if (page) {
    // 게임 화면은 인터넷이 되면 항상 새 버전을 먼저 받는다 (3초 안에 안 오면 저장해 둔 버전)
    const net = fetch(e.request).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => { c.put("./", copy.clone()); c.put("index.html", copy); }); }
      return r;
    });
    const timeout = new Promise((_, no) => setTimeout(no, 3000));
    e.respondWith(Promise.race([net, timeout]).catch(() => caches.match("./").then(h => h || caches.match("index.html")).then(h => h || net)));
    return;
  }
  // 그림 파일 등은 저장해 둔 것을 먼저 쓰고, 뒤에서 갱신한다
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => {
    const net = fetch(e.request).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return r;
    }).catch(() => hit);
    return hit || net;
  }));
});
