'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "93acaf15ee0c134a524eb22f30d0d83d",
".git/config": "9d6081700832ba3c65c77dfb307558d1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e8b6bfcc52597333fa2b278545a92785",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "216e8f8d5eb5a9c3eac89147348fdbf9",
".git/logs/refs/heads/main": "061c5f1444338bf538df21fa59696e2a",
".git/logs/refs/remotes/origin/main": "6ffa922b98a6ae6c13c6a5cbd80627c0",
".git/objects/02/d49b7f35af5cb4249546cb84ed8f7871f1ddbd": "a88c73bdd59d11b8047dee6df18621e6",
".git/objects/03/03e24c196d09a5e4f7709160040c487026d7c0": "8bee2e94be39e7a028d5ecd564c2b638",
".git/objects/06/9257f2a075f7d0e47cac9104fbae17691a3b1c": "fd3194e9db6d1cbc509e8991cb01dfee",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/17/da25e29d95499ab6259a1f34f6d7c8f4409007": "6f236259bb9cc6d2cb5d2c7a3d60b8ec",
".git/objects/1c/949d991cc98ff96773d8d06a3677b618123323": "7788f92f5a58fcc4a33ec557f7e674cb",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/05489e2d6a9302a6031bd22c49e14c0e4ef9ac": "02d9796f7a6b2974c6f3d38d40aebcb9",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4f/d319eefd1a5c04d5fbdfcbf9b6e749515dcd23": "792f7551a11235d514361471a87811d4",
".git/objects/54/164525d423229629b2bdced70ad67c5f009d28": "aeeb0679d67b22773ebdbf5ca53aafcc",
".git/objects/5c/47111945ccf8615169c53e94668006fd5fd5e1": "360d70d4b5c638ac54f10d2dfd054376",
".git/objects/66/88fb98f63af031125ec231350716d3ec883740": "78defdfa90df9d41be2ba54488c8b503",
".git/objects/6b/9bd282c075ae2a9583f7c92554e2b63f401ce8": "210e85014363cd9b51255ff5f0f10e8b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/71/f615b4c6cc533c67c4f9cd017d4a74e6e44b0c": "22d5d7d3c8f8a0dd52e818ed69d513ed",
".git/objects/75/1765cf009b1eaf1e01554f2552bd88ccc1f553": "386411a962771473b306b851bcbff60e",
".git/objects/76/8f0986d1b5074067c55bb935559d7f6784e877": "71719395c31b6aa38180be3fcad361d3",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/a87d177f3f0fd601056d5cfe25f6fbc5e2e643": "dd27007c1ac685aab581b6670a2387c6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/b3169ec3ea7c69c1f690b438df5c753a72905c": "cd1db9debbff0fa85ce404ca1010ec0f",
".git/objects/97/dd4a554588fdede202db53954018c0fe40c415": "6cbbf30c5b19c4afb494fde687975860",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9e/3744d036385ad534b64dc642fe87d2af4dfcce": "2f6f7ddb7c8263097e9ca4c5b76cfa58",
".git/objects/a4/886ede880677799bbacd1ae1501476b672513c": "be9800857719fc3ef1928f52823e4926",
".git/objects/ae/2535fbc5ea373664cf256ecef5bfbb812cb901": "6e4875af7182a8c3b67133912d9014a4",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/df7ef7fed87ccde3d6242d6f1302a3d1f0d160": "8643594a91d74fff909ba1c8d30f90a6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/6478619809d7fc17e8a7cff816ea7c78e78a35": "c8294b989f8979ddd58d9a1e2b43264f",
".git/objects/c0/a247c8cd067d4b08140997f13c2a2a12e2a3b7": "d06f8ae71220048481bbfc6b24fddf6e",
".git/objects/c8/ae2efd7b92d550b61abed3a6f4dd176a2afb8f": "0682c198275bca86db0546f6ec1e4b30",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e8/f358e768c3557618ee7b09cebc262f502e0d3c": "30246eb5553bbc03cd984d28775aacf6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/f4ed750c3a9b9538398517db4a634697cb0684": "f4226e76aac06df49c224cbd1df3adf2",
".git/refs/heads/main": "65fae37072792bf119cfaf01603c8589",
".git/refs/remotes/origin/main": "65fae37072792bf119cfaf01603c8589",
"assets/AssetManifest.bin": "1e3323172908990fbafd3ea706c76fc1",
"assets/AssetManifest.bin.json": "75a8671a5f85268604373a4985117009",
"assets/AssetManifest.json": "4be0ab4a7a9650a4e8a3a1e88e363fd1",
"assets/assets/fonts/Sora-Regular.ttf": "e771c55096d16865a23c2795806fb01b",
"assets/assets/images/cat.png": "374ec446e3d1b53a79b96b32b6060fa3",
"assets/assets/images/splash_image1.jpg": "48fba3bba8d4ba2f398fd87d9aad74ba",
"assets/assets/images/splash_image2.jpg": "966c77d971238c6239f7306c09828fca",
"assets/assets/images/splash_image3.jpg": "76dc1569524b8d20fa938c4fac665073",
"assets/assets/images/splash_image4.jpg": "9d257031e1e743ffad20f741f5004a33",
"assets/FontManifest.json": "476f468610c5836f716bb8b82cf80ed4",
"assets/fonts/MaterialIcons-Regular.otf": "783f3d6854e464dd51114ba7e5a7639b",
"assets/NOTICES": "1599d8ad7f570882ff6f583e8a1d8d72",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "91eb1a6fa17fb7670814ffa120489439",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3bf15312f8230da351a988a5e188f485",
"/": "3bf15312f8230da351a988a5e188f485",
"main.dart.js": "2af22dc2ec5ba3f5667d632be2000f7d",
"manifest.json": "5dc101f8cb4ce0a561cd67e292a94173",
"version.json": "ceb14a55ef114a423125850cdfc4f102"};
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
