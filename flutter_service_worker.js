'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"index.html": "fe454da5067c5022eb1aa3809bae38f4",
"/": "fe454da5067c5022eb1aa3809bae38f4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"manifest.json": "cb93a4af2080fef308624e10e403e580",
"version.json": "fdb1c861b4bec6aa69ef0c4800a8394e",
"favicon.png": "aeebce57f4c2aba2425b8bd1e70bba6e",
"flutter_bootstrap.js": "32e791cc07e08360e1418453b7d99193",
"icons/Icon-maskable-512.png": "f5b07628621c75451cfc62459ade6b8b",
"icons/Icon-maskable-192.png": "da8ad0e2d1baebce7ceaa4a9fe0446f6",
"icons/Icon-192.png": "da8ad0e2d1baebce7ceaa4a9fe0446f6",
"icons/Icon-512.png": "f5b07628621c75451cfc62459ade6b8b",
"assets/NOTICES": "997629e8afe34871f5ac3b12545a6cb2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/FontManifest.json": "d7f8b962db6ba058cbb589e352689d90",
"assets/AssetManifest.bin.json": "86a5d711b1fa77efbf8f4a434044d7ca",
"assets/fonts/MaterialIcons-Regular.otf": "8461e6bf1647eef32cf069bf36ad55d1",
"assets/AssetManifest.bin": "65f4741ace8454ac9d0e224730ffbf7f",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "c0d26b1964eb4c2445314f4a800996dc",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5bf2076505c8cda9452aaff84616e893",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "b1a590afaa15d6de0ea80523406ddbdd",
"assets/packages/flutter_donation_buttons/assets/coffee2.png": "1446f4880b85af9912f34dd705a371f5",
"assets/packages/flutter_donation_buttons/assets/coffee.png": "2159a0ac84d49abbdb353eaaf502eeb8",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "36006a2aee699bab11e4562e9bd81963",
"assets/assets/slide2.png": "640e4647a95a0977c66cc7f2fb47f013",
"assets/assets/images/logo.png": "2df34527e05a0043ca86af159aeb2767",
"assets/assets/images/geological_time.png": "7e42ca5d59471938765f89f644d36194",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/profile.png": "9fffa8f0c626a76dac5730aff77e52fd",
"assets/assets/images/fossils.png": "65bbba2561c00c6a193401a6d2652ff2",
"assets/assets/images/header_background.png": "da86d1f3fa118e5710b4fac3e9e5832e",
"assets/assets/images/foreground.png": "f2b4afc515527f2618efdd7d5f41a97d",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/gts_nalma.json": "cd1bd9cffb8c41d6f17590e29281da0a",
"assets/assets/gts_alma.json": "f50c7a8c3e72c11e747b399e7f371ff5",
"assets/assets/gts_lvf.json": "c6fd2f7ae0122da5d0fe8befd81b353f",
"assets/assets/gts_tools.json": "058435eb66358109882a306fd695780f",
"assets/assets/gts_polarity.json": "7761c66d63bfff95d8f4f0edb908bb13",
"assets/assets/gts_mn.json": "27c5dfd063e7afbfca7aeaca41b590f2",
"assets/assets/icc_data.json": "b1e0a5a87d66ff7278c551c7493393bd",
"assets/assets/gts_salma.json": "e6eb01dc178cf54cfaf08029033ea8cb",
"assets/assets/gts_elma.json": "c1021e554ff9cac70012020060b9dd53",
"assets/assets/lang/ca.json": "255b83cfe6dd6a4895c17dbd93eba148",
"assets/assets/lang/el.json": "c1b55bd320c8f3e428d3740c44d267fb",
"assets/assets/lang/fr.json": "bef1b95f172a128ef9615c71c8fbedc9",
"assets/assets/lang/es.json": "f7408de0435343a3188c745a2748817b",
"assets/assets/lang/de.json": "f7913ba4ad5a934301568563bd400a67",
"assets/assets/lang/en.json": "00de46e775d29492f5816c66d34ad0d5",
"assets/assets/lang/zh.json": "95608c4a8393e31c4585d67f58474c94",
"assets/assets/lang/verify_translations.py": "82eec7c8b8dc3adbc028b6bf5e79135a",
"assets/assets/lang/clean_extra_keys.py": "e89f68d5e3d59066553b1d7773529d30",
"assets/assets/lang/it.json": "9eac27305cb7026c7406a95bc054f1d1",
"assets/assets/lang/pt.json": "fd92dacaac352031e1c1d474b567440f",
"assets/assets/nail.svg": "b83da8d9249302a86213dfa5a4e9a7c7",
"assets/assets/gts_nw_eu.json": "5cc61284070a333bccbcdbf608fefcfa",
"assets/assets/slide3.png": "5ea4e120eb034ee41319622791234450",
"assets/assets/phylo_tree.html": "0499666a44d469e48553c864604c2662",
"assets/assets/slide1.png": "4741e5cea9da361d4876d507860ce425",
"assets/assets/GTS2020.json": "b602e0b835f383999816946804aa6dc9",
"main.dart.js": "cc59009a50064b4219b3ab237b01b903"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
