const CACHE = "skyace200-v9a";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png"].concat(["art/b_A_A.webp", "art/b_B_r2.webp", "art/b_B_r3.webp", "art/b_B_r5.webp", "art/b_B_r8.webp", "art/b_F1_F1.webp", "art/b_F2_F2.webp", "art/b_K_r0.webp", "art/b_K_r1.webp", "art/b_K_r7.webp", "art/b_S_S.webp", "art/b_V_V.webp", "art/b_m0_r0.webp", "art/b_m0_r1.webp", "art/b_m0_r2.webp", "art/b_m0_r3.webp", "art/b_m0_r4.webp", "art/b_m0_r5.webp", "art/b_m0_r6.webp", "art/b_m0_r7.webp", "art/b_m0_r8.webp", "art/b_m0_r9.webp", "art/b_m1_r0.webp", "art/b_m1_r1.webp", "art/b_m1_r2.webp", "art/b_m1_r3.webp", "art/b_m1_r4.webp", "art/b_m1_r5.webp", "art/b_m1_r6.webp", "art/b_m1_r7.webp", "art/b_m1_r8.webp", "art/b_m1_r9.webp", "art/b_m2_r0.webp", "art/b_m2_r1.webp", "art/b_m2_r2.webp", "art/b_m2_r3.webp", "art/b_m2_r4.webp", "art/b_m2_r5.webp", "art/b_m2_r6.webp", "art/b_m2_r7.webp", "art/b_m2_r8.webp", "art/b_m2_r9.webp", "art/b_m3_r0.webp", "art/b_m3_r1.webp", "art/b_m3_r2.webp", "art/b_m3_r3.webp", "art/b_m3_r4.webp", "art/b_m3_r5.webp", "art/b_m3_r6.webp", "art/b_m3_r7.webp", "art/b_m3_r8.webp", "art/b_m3_r9.webp", "art/b_m4_m4.webp", "art/b_m5_r0.webp", "art/b_m5_r1.webp", "art/b_m5_r2.webp", "art/b_m5_r3.webp", "art/b_m5_r4.webp", "art/b_m5_r5.webp", "art/b_m5_r6.webp", "art/b_m5_r7.webp", "art/b_m5_r8.webp", "art/b_m5_r9.webp", "art/e_ac130_r0.webp", "art/e_ac130_r1.webp", "art/e_ac130_r2.webp", "art/e_ac130_r3.webp", "art/e_ac130_r4.webp", "art/e_ac130_r5.webp", "art/e_ac130_r6.webp", "art/e_ac130_r7.webp", "art/e_ac130_r8.webp", "art/e_ac130_r9.webp", "art/e_drone_drone.webp", "art/e_mi24_r0.webp", "art/e_mi24_r1.webp", "art/e_mi24_r2.webp", "art/e_mi24_r3.webp", "art/e_mi24_r4.webp", "art/e_mi24_r5.webp", "art/e_mi24_r6.webp", "art/e_mi24_r7.webp", "art/e_mi24_r8.webp", "art/e_mi24_r9.webp", "art/e_mig21_r0.webp", "art/e_mig21_r1.webp", "art/e_mig21_r2.webp", "art/e_mig21_r3.webp", "art/e_mig21_r4.webp", "art/e_mig21_r5.webp", "art/e_mig21_r6.webp", "art/e_mig21_r7.webp", "art/e_mig21_r8.webp", "art/e_mig21_r9.webp", "art/e_mig29_r0.webp", "art/e_mig29_r1.webp", "art/e_mig29_r2.webp", "art/e_mig29_r3.webp", "art/e_mig29_r4.webp", "art/e_mig29_r5.webp", "art/e_mig29_r6.webp", "art/e_mig29_r7.webp", "art/e_mig29_r8.webp", "art/e_mig29_r9.webp", "art/e_osa_r0.webp", "art/e_osa_r1.webp", "art/e_osa_r4.webp", "art/e_osa_r7.webp", "art/e_osat_r0.webp", "art/e_osat_r1.webp", "art/e_osat_r4.webp", "art/e_osat_r7.webp", "art/e_su25_r0.webp", "art/e_su25_r1.webp", "art/e_su25_r2.webp", "art/e_su25_r3.webp", "art/e_su25_r4.webp", "art/e_su25_r5.webp", "art/e_su25_r6.webp", "art/e_su25_r7.webp", "art/e_su25_r8.webp", "art/e_su25_r9.webp", "art/e_su27_ace.webp", "art/e_t72_r2.webp", "art/e_t72_r3.webp", "art/e_t72_r5.webp", "art/e_t72_r6.webp", "art/e_t72_r8.webp", "art/e_t72t_r2.webp", "art/e_t72t_r3.webp", "art/e_t72t_r5.webp", "art/e_t72t_r6.webp", "art/e_t72t_r8.webp", "art/e_tu95_r0.webp", "art/e_tu95_r1.webp", "art/e_tu95_r2.webp", "art/e_tu95_r3.webp", "art/e_tu95_r4.webp", "art/e_tu95_r5.webp", "art/e_tu95_r6.webp", "art/e_tu95_r7.webp", "art/e_tu95_r8.webp", "art/e_tu95_r9.webp"]);
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
