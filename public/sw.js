if (!self.define) {
  let e,
    a = {};
  const i = (i, s) => (
    (i = new URL(i + ".js", s).href),
    a[i] ||
      new Promise((a) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = a), document.head.appendChild(e);
        } else (e = i), importScripts(i), a();
      }).then(() => {
        let e = a[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, c) => {
    const r =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (a[r]) return;
    let n = {};
    const d = (e) => i(e, r),
      f = { module: { uri: r }, exports: n, require: d };
    a[r] = Promise.all(s.map((e) => f[e] || d(e))).then((e) => (c(...e), n));
  };
}
define(["./workbox-75794ccf"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/159-09b3113affb4ea70.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/339-401c9d8c1493e6db.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/374-3531ad601496dd9a.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/55-ce2085b37d9fc292.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/602-4f7c919d48636e88.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/904-c93aede9c493d6b3.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/framework-5f4595e5518b5600.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/main-f87b3d58e31cc221.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/pages/_app-86be6dd4166831dd.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/pages/_error-2280fa386d040b66.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/pages/aboutUs-100b891490190054.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/pages/articles-6a60468b7def02fb.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/pages/articles/%5Bid%5D-76abfa1ddbcc3bc3.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/pages/contactUs-817ccee4aeb0271f.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/pages/donate-d9092b0c2c5cf28a.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/pages/index-1f741bf990a7bbf2.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/pages/login-79104b389648fb78.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/pages/register-54382e4c5f9ec21e.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/pages/search-bdfc645b14184145.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/pages/ss-ba94363272e8822c.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/pages/users/dashboard-df29d5afb5c6c15f.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/chunks/webpack-df4cf1c8d23aa877.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/css/eabd57bbc0e71964.css",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/rStVJPXvaVa-q5Q7aN6mO/_buildManifest.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/rStVJPXvaVa-q5Q7aN6mO/_middlewareManifest.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        {
          url: "/_next/static/rStVJPXvaVa-q5Q7aN6mO/_ssgManifest.js",
          revision: "rStVJPXvaVa-q5Q7aN6mO",
        },
        { url: "/css/Home.css", revision: "e91167da36ddcd2ea2345e9acade7c05" },
        {
          url: "/css/Post-Template.css",
          revision: "dc5f1818c467fa934379b789715f575f",
        },
        {
          url: "/css/contactUs.css",
          revision: "d9ed1c6d4321797dbb1f0795535f1422",
        },
        {
          url: "/css/contactUs2.css",
          revision: "41aee08fc331e75d3f56b8fc7ee14bc2",
        },
        {
          url: "/css/flickity.min.css",
          revision: "ed4e9ed5870e0d4bf2532ce3edcaf17d",
        },
        {
          url: "/css/flickity.pkgd.min.js",
          revision: "f008f38402e0f28ae683ab8ef252a231",
        },
        {
          url: "/css/nicepage.css",
          revision: "2f3f6a675c93b91a911df2fb888f4544",
        },
        {
          url: "/css/student-entry.6ee9aee0953b16d0c9f9.css",
          revision: "659427818945dce565fdb0c50ee912ae",
        },
        {
          url: "/css/webpack-dev.297054d8010bce5fb4e6.css",
          revision: "7147d05bada86cbe475e8748843a46c6",
        },
        { url: "/favicon.ico", revision: "c30c7d42707a47a3f4591831641e50dc" },
        {
          url: "/images/-min.jpg",
          revision: "1756526f9c1df4340a91112add302789",
        },
        {
          url: "/images/-min1.jpg",
          revision: "94508a3d522bb21753b7eb215bb25103",
        },
        {
          url: "/images/-min2.jpg",
          revision: "43be6990acb66cc7adf140a519f92f76",
        },
        { url: "/images/1.jpeg", revision: "83180f47920150d8f7e1361a2e04a483" },
        { url: "/images/1.png", revision: "2434b2793f2a2c435a44c7ef6bc4da08" },
        { url: "/images/2.jpeg", revision: "1b5b0e08eadd83160fe6e78bec62253d" },
        { url: "/images/2.png", revision: "8ddfc44bee030a3ab8e6ec2fca5c2a91" },
        { url: "/images/3.jpeg", revision: "1e68912ce811b4064017a566bbc5073c" },
        { url: "/images/3.png", revision: "36cf09d098bb55e778de91e737b4446f" },
        { url: "/images/4.png", revision: "8a45257dcce2e7153689f8449c178aad" },
        {
          url: "/images/4256662.png",
          revision: "f2bd9a5886bd027f6c9a30ec32a2ee4a",
        },
        {
          url: "/images/44720b5f-d674-4089-b6ec-12c44ea13947.jpg",
          revision: "1bd93104233873c1552bd9f171678e70",
        },
        {
          url: "/images/Kucoin.png",
          revision: "1efd48ceee3a75c30c48e8a35af128dc",
        },
        {
          url: "/images/Managers analyzing company rating and brand reputation.jpg",
          revision: "b7689b7b88f7e349553c8dd84f588740",
        },
        {
          url: "/images/USDT.png",
          revision: "3f1a29958f49453fb68594cbf7874386",
        },
        {
          url: "/images/adobe-gray@2x.png",
          revision: "eb6c274773e0e375483ea7bbb11b8016",
        },
        {
          url: "/images/ann-and-john-doerr-gray@2x.png",
          revision: "2629eb10685301660d63c5650a71b54f",
        },
        {
          url: "/images/apple-touch-icon-114x114-precomposed.new.png",
          revision: "3efa1d06955c70e85a515abb867b7484",
        },
        {
          url: "/images/apple-touch-icon-144x144-precomposed.new.png",
          revision: "6b8b0c7bc359e8806922c074e8c1e70e",
        },
        {
          url: "/images/apple-touch-icon-57x57-precomposed.new.png",
          revision: "e81e318eb9ed3fd8e390cc155069296b",
        },
        {
          url: "/images/apple-touch-icon-72x72-precomposed.new.png",
          revision: "a2e085989a7cfbd63e68f68c17a2ceaf",
        },
        {
          url: "/images/arrow.png",
          revision: "015eed069573a1569c5d1886f0d885cd",
        },
        {
          url: "/images/arrow.svg",
          revision: "3b713d1dddf6c604c5ccdfa97f4b4795",
        },
        {
          url: "/images/arrowDown.svg",
          revision: "aa7c13de653a8fcc000dcca54c2b5d14",
        },
        {
          url: "/images/att-gray@2x.png",
          revision: "28410a86c4d818fd194f4127bd2dc17f",
        },
        {
          url: "/images/automatedtrading_20201005.webp",
          revision: "ac5ddbcc06276b58914baa0328384905",
        },
        {
          url: "/images/automaticTrading.webp",
          revision: "ac5ddbcc06276b58914baa0328384905",
        },
        {
          url: "/images/bank-of-america-gray@2x.png",
          revision: "efe1160a7f12ac7a9c9dfa3305975f70",
        },
        {
          url: "/images/bnbnbn.jpg",
          revision: "e2ef785b23e3b045b339dfbe48ee7fc5",
        },
        {
          url: "/images/border.png",
          revision: "d4a5366c0aaef6f6d8fd434b955e4bc1",
        },
        {
          url: "/images/bot.png",
          revision: "69f75e58b21af510e4ff346e374230c3",
        },
        {
          url: "/images/bots.png",
          revision: "0412342acddccb471967511601b61350",
        },
        {
          url: "/images/bots.svg",
          revision: "082ca5fe849e1f2cb034efa40f03dc55",
        },
        {
          url: "/images/brazil-flag.png",
          revision: "c57eae561e95e38e3956787860973fbb",
        },
        {
          url: "/images/button-background-orange.png",
          revision: "738778ccfc3067bb9ad68b35a63c63ef",
        },
        {
          url: "/images/candlesticks.gif",
          revision: "82bea30d8ca7d009ccea61a20b9c8701",
        },
        {
          url: "/images/carlos-rodriguez-pastor-gray@2x.png",
          revision: "457a8adae33223781f66cd23ce44c839",
        },
        {
          url: "/images/college-board-gray@2x.png",
          revision: "1724b44b52d6b7f1bcc8b1fc41d37a81",
        },
        {
          url: "/images/cvb.jpg",
          revision: "18bebc4f7df613296ae601c4b04ed6fd",
        },
        {
          url: "/images/cxc.jpg",
          revision: "ec5d662310e88aebdb9d8336cdf467ac",
        },
        {
          url: "/images/donate.jpg",
          revision: "4bb546ad78463571698856f6b4c028e3",
        },
        {
          url: "/images/donate1.jpg",
          revision: "c5e96300b3c60623b3ba716203390959",
        },
        {
          url: "/images/error.png",
          revision: "72efed49b7483ac2159a11b22eba25e6",
        },
        {
          url: "/images/estyle-education-concept-cheerful-good-looking-redhead-female-student-with-foxy-long-hair-wearing-headphones-neck-backpack-.jpg",
          revision: "cf6d1c6793d73b823d4ee9eced6eb234",
        },
        {
          url: "/images/fastly-gray@2x.png",
          revision: "a0a459cf13ac4fcedc99e48b934d3cb8",
        },
        {
          url: "/images/financial_73426-407.heic",
          revision: "d41d8cd98f00b204e9800998ecf8427e",
        },
        {
          url: "/images/financial_73426-407.webp",
          revision: "086c5016f2eb515521f160b49f42c035",
        },
        {
          url: "/images/financial_73426-407.webp - Paint 17_12_1400 01_20_40 ق.ظ.png",
          revision: "d9d9a550de571d647f44767cabbcb90c",
        },
        {
          url: "/images/financial_73426-407.webp-Paint17_12_140001_20_40..png",
          revision: "d9d9a550de571d647f44767cabbcb90c",
        },
        {
          url: "/images/france.png",
          revision: "012a3aad9752561fb4db176a76332bbc",
        },
        {
          url: "/images/gates-foundation-gray@2x.png",
          revision: "de166fb8f5da6a9e0ae26e0d7e052ebb",
        },
        {
          url: "/images/gm-gray@2x.png",
          revision: "a3ec0d191eab5533786515152855813e",
        },
        {
          url: "/images/google-gray@2x.png",
          revision: "1bbbd8f81259dfad34bad096973516f1",
        },
        {
          url: "/images/graphic-artificial-intelligence-trading-crypto-currency-by-snalyzing-all-indicators-vector-illustration_73426-562.webp",
          revision: "96b089d8f6b4fa2d27e5b2e09b3eeadb",
        },
        {
          url: "/images/hero-background.jpg",
          revision: "ec26b42870f1a1817b5344b269e3b3dd",
        },
        {
          url: "/images/hero.jpg",
          revision: "9a37552273bd1f8c77bfe6ed8fd6a86c",
        },
        {
          url: "/images/hero.png",
          revision: "ff62e6aea004b347122d1193bc3d4dfa",
        },
        {
          url: "/images/ice_mobile_v31.jpeg",
          revision: "89e103488ecc4557eff2d3f70f8c12c7",
        },
        {
          url: "/images/ice_v31.jpeg",
          revision: "488f16849a5547b198fab757c2969b1f",
        },
        {
          url: "/images/india-flag.png",
          revision: "d95ccc0ff572a5d2f34cbc4f53c88ecf",
        },
        {
          url: "/images/instagram-svgrepo-com.svg",
          revision: "b3b7a0210038e9a9f2fcb54f17d0f1c1",
        },
        { url: "/images/jj.jpg", revision: "bee15298c38c7165ebaef328238bc855" },
        {
          url: "/images/jkjk.jpg",
          revision: "86021b9ebaf126d17bca5f216550903d",
        },
        {
          url: "/images/khan-logo-dark-background-2.png",
          revision: "40a58bf2723613185c22de55ac2252ec",
        },
        {
          url: "/images/last_chance_dots.png",
          revision: "525d121f167d81675a79e8e10121b146",
        },
        {
          url: "/images/last_chance_pattern0.jpg",
          revision: "f44d3f19c7ed3e8415bf3e80bb1850fe",
        },
        {
          url: "/images/last_chance_pattern1.jpg",
          revision: "896983aeb38a5e336184c79ed8d49bec",
        },
        {
          url: "/images/learner.jpg",
          revision: "349ab7abfb9c87ddb195ef1a2df52306",
        },
        {
          url: "/images/learner.png",
          revision: "7027183089a84f4608fa760ee0ea7d63",
        },
        {
          url: "/images/learning.jpg",
          revision: "049f9d0797202cc2e143f906310dda9e",
        },
        {
          url: "/images/learning.png",
          revision: "2b04051dad6780ffe10f22a2fe9a09fa",
        },
        {
          url: "/images/left-background.png",
          revision: "ff1d394e36944e91eef71c847181f488",
        },
        {
          url: "/images/lemann-foundation-gray@2x.png",
          revision: "a36be8b87c7c14705140970570e06d0f",
        },
        {
          url: "/images/lists.jpg",
          revision: "2b0267d204ac878ee0d4af5785855013",
        },
        {
          url: "/images/lists.png",
          revision: "125178efb303049d099d1efe06129c68",
        },
        {
          url: "/images/logo-192.png",
          revision: "4063443541987754e78bb31dae12c863",
        },
        {
          url: "/images/logo-512.png",
          revision: "0975b37fcb8c587a4390c7d3e6ffbee8",
        },
        {
          url: "/images/logo-512.svg",
          revision: "fe9d6b5407b13d8fc9beb3c233e04fc6",
        },
        {
          url: "/images/logo-640.png",
          revision: "0460cbfc28bd0b5a6af19b8ea506301d",
        },
        {
          url: "/images/logo-telegram.svg",
          revision: "2d0b6d439cf4c38712220ab1bdaa1f36",
        },
        {
          url: "/images/logo.png",
          revision: "0153c3ce137d3f36af18ae3eb0ac7699",
        },
        {
          url: "/images/logo.svg",
          revision: "00af7a87325f1acc932acfe39c39b0be",
        },
        {
          url: "/images/man-min.jpg",
          revision: "98de3c5590a6794c8f4f54e9b564fc19",
        },
        {
          url: "/images/mexico-flag.png",
          revision: "e421e06bec7e453c54b7f99ec9863915",
        },
        {
          url: "/images/novartis-gray@2x.png",
          revision: "ebbf4638d23c17e1b427d7167a781146",
        },
        {
          url: "/images/orange_mobile_v31.jpeg",
          revision: "fc27d22c6e9c84a9a7de5efcf98a058e",
        },
        {
          url: "/images/orange_v31.jpeg",
          revision: "e92b8123eff66631632deccb05d7e002",
        },
        {
          url: "/images/planet_v31.jpeg",
          revision: "3ac0967e91b488788f621d106022dfe0",
        },
        {
          url: "/images/report.jpg",
          revision: "21f0d1d13a0c73e6b7c514ca3055a335",
        },
        {
          url: "/images/report.png",
          revision: "365d89f1c170def5a30f0466d7c9d042",
        },
        {
          url: "/images/review.jpg",
          revision: "6cc947101e4795954dad8834294c784f",
        },
        {
          url: "/images/review.png",
          revision: "7764b85295e8d5442c7c61c2a4094ec8",
        },
        {
          url: "/images/review1.png",
          revision: "d57ee99e6d3dca3cb0f686348c7b8a2d",
        },
        {
          url: "/images/right-background.png",
          revision: "01201a8cb3dfd83108325f870e95da2e",
        },
        {
          url: "/images/sa-min.jpg",
          revision: "2a0949e2fc5350922b9e189aee812fe5",
        },
        {
          url: "/images/share.jpg",
          revision: "4959a932d4e9258610a7644db20f2290",
        },
        {
          url: "/images/share.png",
          revision: "97f21be53589b308862fb22159a2cf7e",
        },
        {
          url: "/images/signUp.jpg",
          revision: "f5c0c07c62e0fa80dafe7bfce9fa0832",
        },
        {
          url: "/images/signUp.png",
          revision: "90a25eee9aa5573165070bd445316004",
        },
        {
          url: "/images/space_mobile_v31.jpeg",
          revision: "2056387f0593d0046e2c075e26a43f3e",
        },
        {
          url: "/images/space_v31.jpeg",
          revision: "2056387f0593d0046e2c075e26a43f3e",
        },
        {
          url: "/images/student_laptop_v31.jpeg",
          revision: "e304cf0b5b66b19e282edde35c066fd6",
        },
        {
          url: "/images/student_left_v31.jpeg",
          revision: "67c6a51ff1e386798ef18f1a36f603cb",
        },
        {
          url: "/images/student_main_v31.jpeg",
          revision: "78df1cf0d04e03ee1290098d24a3d4dc",
        },
        {
          url: "/images/student_mobile_v31.jpeg",
          revision: "b778ebb3bc01891f296c0723a624b13d",
        },
        {
          url: "/images/students.jpg",
          revision: "f97b81eedef5d829bc51a2c0c74dfad9",
        },
        {
          url: "/images/swa-min.jpg",
          revision: "d9f74988ae31ab5a724cc72c021ba7b1",
        },
        {
          url: "/images/tata-trusts-gray@2x.png",
          revision: "9d181b6cbe34bb3162d868b5afa8ce05",
        },
        {
          url: "/images/teacher.jpg",
          revision: "a99ae6ab9db5229f624b073c19821c0d",
        },
        {
          url: "/images/teacher.png",
          revision: "08886f83588e769c33c0e041d2b32004",
        },
        {
          url: "/images/teachers-removebg-preview.png",
          revision: "803cfc7eb4e8c098909596bdd07e23a5",
        },
        {
          url: "/images/teachers.jpg",
          revision: "20fec44c1631d63969d1fbc98cb3b32e",
        },
        {
          url: "/images/teachers.png",
          revision: "0d8abc70351990fa96eca6aa73b31942",
        },
        {
          url: "/images/testimonial-image-611952fa9b178.jpg",
          revision: "c0ad46b4dc8da7ad93ebd38e2a71b726",
        },
        {
          url: "/images/testimonial-image-611b4ed694c04.jpg",
          revision: "4fc22a7e336ef4d70e53e570a3109a47",
        },
        {
          url: "/images/testimonial-image-611b563854b4e.jpg",
          revision: "1b08b9016ff1e043951773e574857baa",
        },
        {
          url: "/images/testimonial-image-611b5e497efb2.jpg",
          revision: "70682c9fbcf2eabcfda875e8d929f613",
        },
        {
          url: "/images/testimonial-image-611b6c725c0a0.jpg",
          revision: "bfe71ebbdc0657b66aafce55624711d3",
        },
        {
          url: "/images/testimonial-image-611b86fdb8260.jpg",
          revision: "63846702584199a865a997eab23771f1",
        },
        {
          url: "/images/text-bg.png",
          revision: "ac59f3906ca77656b376f2fbcca939bb",
        },
        {
          url: "/images/tradingBot - one.png",
          revision: "ee088ae53ed1c554e0921813be6f8b24",
        },
        {
          url: "/images/tradingBot.png",
          revision: "d92bb30cbee611eabc331ac51d770b9d",
        },
        {
          url: "/images/twitter-svgrepo-com.svg",
          revision: "24513d600f09f61c793f27dabc61573a",
        },
        {
          url: "/images/us-flag.png",
          revision: "e239ef6b7eaaa2f5091fee7739e02d0b",
        },
        {
          url: "/images/usa.png",
          revision: "e00d9919f651e2cd05e15042d9a7032d",
        },
        { url: "/images/v.png", revision: "5542a1d017d72b2470775454269f3f85" },
        {
          url: "/images/v1-anjali-2x.png",
          revision: "7f4547b7ef78fb536c2f672d7b67bd82",
        },
        {
          url: "/images/valhalla-gray@2x.png",
          revision: "c9caf41394da6f9f5c2de86cb02188ab",
        },
        {
          url: "/images/vbvf-min.jpg",
          revision: "dbbe516c71cd165f739756a931955d96",
        },
        {
          url: "/images/wqe-min.jpg",
          revision: "71cf9e7e92d89c2f449abe9a3993caeb",
        },
        { url: "/images/ww.jpg", revision: "18b4390dbe2aac19aa7788474fd1524a" },
        {
          url: "/js/1Chp.0c3df1d35cef1d5926e0.js",
          revision: "4f11fb4d88eaaf7cb745654158a2d79d",
        },
        {
          url: "/js/26Fy.38b08f9d77e6f6795a10.js",
          revision: "cc28ffcaf94ba007f3abcceecbd9239c",
        },
        {
          url: "/js/2CLP.e0fbd05d1a46ef3131f8.js",
          revision: "1796cec889edced642f8bd8a79a91370",
        },
        {
          url: "/js/3hdl.120e632e69c515c0b6e0.js",
          revision: "f01265d73c8c311860d8842af90b9dbf",
        },
        {
          url: "/js/4qrU.f9894f7f2e93a782e250.js",
          revision: "32317dabeeb38a7a49613c04674949db",
        },
        {
          url: "/js/5bhu.253889d32bcb3ac2eba6.js",
          revision: "bb801f29eb1b467cf1c3cb636a3eba34",
        },
        {
          url: "/js/5p2O.7df11840861fb7cccbe2.js",
          revision: "74ea77c3c733262e86810c81743d7a01",
        },
        {
          url: "/js/61HF.979d3385c02193ada908.js",
          revision: "f0512c63dea2a1f29169821bd5553916",
        },
        {
          url: "/js/67L4.deecdb9ebeef94b1c8a6.js",
          revision: "7bd7bebe1fce5f55e47bb822f2e82d0e",
        },
        {
          url: "/js/6OQC.21742236c7249ad1dbac.js",
          revision: "f319f848be7ffab7474931095258d1bc",
        },
        { url: "/js/access.js", revision: "8931112da3e622f95f5e172fed094915" },
        {
          url: "/js/analytics.js",
          revision: "d40531c5e99a6f84e42535859476fe35",
        },
        {
          url: "/js/app-entry.5abd4237eac48698944b.js",
          revision: "90d51d4eca0effe2f014351e80723108",
        },
        {
          url: "/js/cGmj.a344b4378d27aa314910.js",
          revision: "52996ad39f2da68ae4dd15f27c399c01",
        },
        {
          url: "/js/corelibs.6deac3348b14fe5f2bab.js",
          revision: "f4f024a85a23c3e764cec4edac3230cb",
        },
        { url: "/js/gtm.js", revision: "66799deb75b9e8cd68e5db263e0c6c43" },
        {
          url: "/js/java~161cee25.2411dd65df30ddd511e7.js",
          revision: "99c5af9ee932190d3f5a9005cca5e66e",
        },
        { url: "/js/jquery.js", revision: "dc5e7f18c8d36ac1d3d4753a87c98d0a" },
        {
          url: "/js/j~88e4f05d.0a2c326e2bd9098bf52c.js",
          revision: "74b4380fd45ea60db3ebff00d093e8dd",
        },
        {
          url: "/js/nicepage.js",
          revision: "ff03d80e741c80f9b85e818535654c3c",
        },
        {
          url: "/js/runtime.a51f45011348545bfc40.js",
          revision: "44e1cf066d8aa30cb0603fbae0532f5a",
        },
        {
          url: "/js/service-worker.js",
          revision: "c4f1659704cbcb8b43e0e9525e3e1e69",
        },
        {
          url: "/js/shared-components.1ea64efd0533c3e06ec9.js",
          revision: "ed4e73e243cf726b654794f435455634",
        },
        {
          url: "/js/shared-intl.a067d4ea801bd958b7f2.js",
          revision: "5d6226fceef4d758f083dd7aa9d1bae8",
        },
        {
          url: "/js/shared.3dd41cbb32f39446d729.js",
          revision: "b75210eb5c97772bfab77a5150bbf946",
        },
        {
          url: "/js/student-entry.9e6aedcc2285f31f4fe1.js",
          revision: "53941669647f1e66defd93ce117a4246",
        },
        {
          url: "/js/webpack-dev.22d7fa9fbaac936ffa81.js",
          revision: "83d29b52d1e228bd4d74311ff76c0e04",
        },
        {
          url: "/js/wonder-blocks.903f954c5e783cb9c2b3.js",
          revision: "ca548243b2dc96b721b87d554111f14f",
        },
        { url: "/logo.png", revision: "a7f308f2098ef66ea6635b39f5a0c5c0" },
        { url: "/logo.svg", revision: "399a05274017b8f482a1264cccba25e7" },
        { url: "/manifest.json", revision: "ab4f897841a71341f8079f5e3bd2877a" },
        { url: "/offline.html", revision: "bc47ec2d6c19bb238c63f4a08294b1e9" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: a,
              event: i,
              state: s,
            }) =>
              a && "opaqueredirect" === a.type
                ? new Response(a.body, {
                    status: 200,
                    statusText: "OK",
                    headers: a.headers,
                  })
                : a,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const a = e.pathname;
        return !a.startsWith("/api/auth/") && !!a.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
