if (!self.define) {
  let s,
    e = {};
  const i = (i, n) => (
    (i = new URL(i + '.js', n).href),
    e[i] ||
      new Promise((e) => {
        if ('document' in self) {
          const s = document.createElement('script');
          (s.src = i), (s.onload = e), document.head.appendChild(s);
        } else (s = i), importScripts(i), e();
      }).then(() => {
        let s = e[i];
        if (!s) throw new Error(`Module ${i} didn’t register its module`);
        return s;
      })
  );
  self.define = (n, t) => {
    const c =
      s ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (e[c]) return;
    let a = {};
    const u = (s) => i(s, c),
      r = { module: { uri: c }, exports: a, require: u };
    e[c] = Promise.all(n.map((s) => r[s] || u(s))).then((s) => (t(...s), a));
  };
}
define(['./workbox-588899ac'], function (s) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    s.clientsClaim(),
    s.precacheAndRoute(
      [
        {
          url: '/_next/static/chunks/1001.615d1c9306c5605e.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/1195.5be540d1925959fc.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/1841.0eb58dd21f35c580.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/1851.dcfe60d65de69ec4.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/1972.f4449d940c817882.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/2115.23f32611aad6bf62.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/2125.ff11c1032d727949.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/2512.affb1c2a43bc9930.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/2957.45b647e5c334e152.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/299-761450c635880b84.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/3332.a87437d22017ee38.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/3391.2c67e75229f0de1c.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/3798.ed67ffc59c10d821.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/3978-e7e4efce5c655275.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/423.ca95654651fc4eaf.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/4544.7a62161c86a472a4.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/4710.d1f1c4706a5cb0bf.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/4857.5917c360bfbcb8ad.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/4862-63d2576b6b8df5dd.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/4884.de9932c4cda7a6bb.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/5331.1e5700cbbc907524.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/5765.e4023ee6b670b9ff.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/6142.1cdbf1d07d0ad073.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/632cba62-8b8968b14fa1b5f9.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/6588.f769157751f54b95.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/6751.b6f3e07126f984cb.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/6776.f1ebeb95ad87482c.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/6911.e3b57fb205d4ed89.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/6979.d8f4b4a9ba7086f9.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/7012.8e914285ad8a2b3c.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/7039.e72984d5e5b6809c.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/7536-2860515294320b5b.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/7622.aa9b3dca86993bb9.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/7946.d2fbe4cc0e8a7a8b.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/8479.16e74cd40a1bee7b.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/8720.6ed76a1d72018400.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/8780-0769d42ee17738af.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/8802-0b034b65c6651f98.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/9200.51dc5797ca7b07de.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/9727-b8c9d89726df20dc.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/9872.aae05ab6377f1f0d.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/framework-79bce4a3a540b080.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/main-f8861ad2a5e77250.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/_app-6ea20db4920e41c1.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/_error-785557186902809b.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/airports-69e665a1458a9f39.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/airports/%5Bid%5D-8e2e3d3c3003102f.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/airports/create-b47fb3b33f13bb6e.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/brokers-bc28c4413edcfd5a.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/brokers/%5Bid%5D-deafbd49f6d77415.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/brokers/create-07edb4d72284689f.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/cm-e7fa48953969439f.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/cm/%5Bid%5D-05a592b10dd12681.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/cm/create-e25737c369cb69de.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/customers-54dde3d4adee4565.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/customers/%5Bid%5D-aaf9f839063b9ae1.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/customers/create-74b93efb2aabf65f.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/express-manifest-upload-d1e8b1a667cb2d18.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/file-upload-1b974cb38338dcf1.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/index-c5f712ed4cd85185.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/login-8c41dc1f1547c5ac.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/logout-403b8e0c106dd409.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/manifest-list-b3008aaba5baed90.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/manifest-upload-a646e33fcfd8bbfe.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/services-1e88f203f5aeb318.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/services/%5Bid%5D-81c9af76363b8028.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/services/create-f2b8626daf15f550.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/pages/ulds-026e08a403fde5b3.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/chunks/webpack-1d02b0808fcac553.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/css/8a8fafb41eb0ecec.css',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/css/986d2d81b89f3df7.css',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/css/a907302341e8082f.css',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/css/f8aee2f66a30e49b.css',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/media/avatar.c9441dc8.svg',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/media/coupon.5015b440.svg',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/media/logo.19a59844.svg',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/media/product.ba64d04a.svg',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/media/zip.9dcc52b5.png',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/q7AUyGRKgFRgl4O7vumxO/_buildManifest.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/q7AUyGRKgFRgl4O7vumxO/_middlewareManifest.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/_next/static/q7AUyGRKgFRgl4O7vumxO/_ssgManifest.js',
          revision: 'q7AUyGRKgFRgl4O7vumxO',
        },
        {
          url: '/arrow-next.svg',
          revision: 'c83b96b9c3af5d7d29bf0822b970287b',
        },
        {
          url: '/arrow-previous.svg',
          revision: '368bfc0612ce03d432495edc17c5b77f',
        },
        {
          url: '/avatar-placeholder.svg',
          revision: '4f5628d48244291a5613c63171ba4168',
        },
        { url: '/favicon.ico', revision: '49e9f61c22cb79988c885e8b745260f7' },
        {
          url: '/icons/apple-icon-180.png',
          revision: '5ed1cfc1e99658bc1afb6d5933cb00bc',
        },
        { url: '/icons/ddd.png', revision: '4d0bd977c14af140d3069300e07805a1' },
        {
          url: '/icons/manifest-icon-192.png',
          revision: 'b2a9e1524eebfd9f77bdff0853145d2c',
        },
        {
          url: '/icons/manifest-icon-512.png',
          revision: '525cb91767b0044d8b688485233bb564',
        },
        { url: '/logo.svg', revision: '1916e8417fa7f99053e588351e1e09de' },
        { url: '/manifest.json', revision: '65e732c28bb9964fc0859f2d05ad5923' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(
      '/',
      new s.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: s,
              response: e,
              event: i,
              state: n,
            }) =>
              e && 'opaqueredirect' === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new s.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new s.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new s.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new s.RangeRequestsPlugin(),
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:mp4)$/i,
      new s.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new s.RangeRequestsPlugin(),
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:js)$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:css|less)$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new s.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      ({ url: s }) => {
        if (!(self.origin === s.origin)) return !1;
        const e = s.pathname;
        return !e.startsWith('/api/auth/') && !!e.startsWith('/api/');
      },
      new s.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      ({ url: s }) => {
        if (!(self.origin === s.origin)) return !1;
        return !s.pathname.startsWith('/api/');
      },
      new s.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      ({ url: s }) => !(self.origin === s.origin),
      new s.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    );
});
