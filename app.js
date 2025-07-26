    const vendorSite = `
<nav class="flex justify-between items-center px-8 py-5 bg-white shadow sticky top-0 z-30">
  <span class="font-extrabold text-2xl text-green-600 tracking-tight">VendorConnect</span>
  <div class="space-x-8 font-semibold text-green-900 hidden md:inline-flex">
    <a href="#features" class="hover:text-green-600 transition">Features</a>
    <a href="#how" class="hover:text-green-600 transition">How It Works</a>
    <a href="#community" class="hover:text-green-600 transition">Community</a>
    <a href="#contact" class="hover:text-green-600 transition">Contact</a>
    <button id="toSeller" class="ml-6 px-5 py-2 rounded bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-semibold shadow hover:opacity-90 transition">I'm a Seller</button>
  </div>
  <button id="toSellerMobile" class="md:hidden px-3 py-2 bg-amber-400 rounded font-semibold text-white">Seller</button>
</nav>

<section class="w-full py-24 px-8 bg-gradient-to-br from-green-50 via-white to-green-200 text-center">
  <h1 class="text-5xl sm:text-6xl font-extrabold text-green-700 mb-6">Source Ingredients. Save Hours Daily.</h1>
  <p class="text-lg sm:text-xl max-w-xl mx-auto text-green-800 mb-8">
    Find nearby suppliers, compare prices, team up for bulk orders—all in one app built for street food vendors.
  </p>
  <div class="flex flex-col sm:flex-row justify-center gap-4">
    <a href="#features" class="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition">See Features</a>
    <button id="loginBtn" class="inline-block bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-800 transition">Login</button>
    <button id="signUpBtn" class="inline-block bg-green-50 text-green-700 border-2 border-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-100 transition">Sign Up</button>
  </div>
</section>

<section id="features" class="max-w-5xl mx-auto py-14 px-8 grid md:grid-cols-2 gap-12">
  <div>
    <h2 class="text-2xl font-bold text-green-700 mb-4">Smart Supplier Discovery</h2>
    <p class="mb-2">Find suppliers within 5km, filter by products, and view ratings instantly.</p>
    <h2 class="text-2xl font-bold text-green-700 mt-8 mb-4">Live Price Comparison</h2>
    <p>Instantly compare prices and get notified when your required ingredient is at the best price.</p>
  </div>
  <div>
    <h2 class="text-2xl font-bold text-green-700 mb-4">Group Ordering</h2>
    <p class="mb-2">Join with nearby food vendors to place joint orders for better rates.</p>
    <h2 class="text-2xl font-bold text-green-700 mt-8 mb-4">Quality & Trust</h2>
    <p>View verified badges, supplier ratings, and dispute resolution for every deal.</p>
  </div>
</section>

<section id="how" class="bg-white py-14 px-8 text-center">
  <h2 class="text-3xl font-bold mb-8 text-green-600">How It Works</h2>
  <div class="grid gap-8 md:grid-cols-3">
    <div class="p-6 bg-green-50 rounded shadow">
      <span class="font-black text-4xl text-green-700 mb-2">1</span>
      <h3 class="font-bold mb-2 text-lg">Login & List Needs</h3>
      <p>Choose your ingredient needs in seconds.</p>
    </div>
    <div class="p-6 bg-green-50 rounded shadow">
      <span class="font-black text-4xl text-green-700 mb-2">2</span>
      <h3 class="font-bold mb-2 text-lg">Compare & Choose</h3>
      <p>Compare prices, quality & delivery, then place an order.</p>
    </div>
    <div class="p-6 bg-green-50 rounded shadow">
      <span class="font-black text-4xl text-green-700 mb-2">3</span>
      <h3 class="font-bold mb-2 text-lg">Save Together</h3>
      <p>Join vendor groups to get bulk discounts automatically.</p>
    </div>
  </div>
</section>

<section id="community" class="py-14 px-8 max-w-4xl mx-auto">
  <h2 class="text-3xl font-bold text-green-600 mb-4">Vendor Community</h2>
  <p>Read tips, share feedback, and join vendor meetups. Get support anytime.</p>
</section>

<!-- Integrated Contact Us Form (green style) -->
<section id="contact" class="py-14 px-8 bg-green-100">
  <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
    <h2 class="text-3xl font-bold text-green-700 mb-2 text-center">Contact Us</h2>
    <p class="text-gray-700 mb-6 text-center">We'd love to hear from you. Please fill out the form below and we’ll respond as soon as possible.</p>
    <form class="space-y-6" autocomplete="off" onsubmit="event.preventDefault(); alert('Contact form submission');">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="contact-name" class="block font-semibold text-gray-800 mb-1">Name <span class="text-red-500">*</span></label>
          <input type="text" id="contact-name" required class="block w-full px-4 py-2 rounded border border-gray-300 focus:outline-green-400" placeholder="Your Name" />
        </div>
        <div>
          <label for="contact-email" class="block font-semibold text-gray-800 mb-1">Email <span class="text-red-500">*</span></label>
          <input type="email" id="contact-email" required class="block w-full px-4 py-2 rounded border border-gray-300 focus:outline-green-400" placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label for="contact-phone" class="block font-semibold text-gray-800 mb-1">Phone (optional)</label>
        <input type="tel" id="contact-phone" class="block w-full px-4 py-2 rounded border border-gray-300 focus:outline-green-400" placeholder="Your Phone Number" />
      </div>
      <div>
        <label for="contact-message" class="block font-semibold text-gray-800 mb-1">Message <span class="text-red-500">*</span></label>
        <textarea id="contact-message" required rows="5" class="block w-full px-4 py-2 rounded border border-gray-300 focus:outline-green-400 resize-none" placeholder="How can we help you?"></textarea>
      </div>
      <button type="submit" class="w-full md:w-auto mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-xl shadow transition">Send Message</button>
      <div class="text-xs text-center text-gray-500 mt-3">We’ll get back to you within 1 business day.</div>
    </form>
  </div>
</section>
`;

const sellerSite = `
<nav class="flex justify-between items-center px-8 py-5 bg-amber-50 shadow sticky top-0 z-30">
  <span class="font-extrabold text-2xl text-amber-600 tracking-tight">VendorConnect Seller</span>
  <div class="space-x-8 font-semibold text-amber-900 hidden md:inline-flex">
    <a href="#seller-features" class="hover:text-amber-600 transition">Supplier Features</a>
    <a href="#analytics" class="hover:text-amber-600 transition">Analytics</a>
    <a href="#quality" class="hover:text-amber-600 transition">Quality</a>
    <a href="#support" class="hover:text-amber-600 transition">Support</a>
    <button id="toVendor" class="ml-6 px-5 py-2 rounded bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold shadow hover:opacity-90 transition">Switch to Vendor</button>
  </div>
  <button id="toVendorMobile" class="md:hidden px-3 py-2 bg-green-700 rounded font-semibold text-white">Vendor</button>
</nav>

<section class="w-full py-24 px-8 bg-gradient-to-br from-yellow-100 via-amber-200 to-amber-50 text-center">
  <h1 class="text-5xl sm:text-6xl font-extrabold text-amber-700 mb-6">Sell Smart. Reach More Vendors.</h1>
  <p class="text-lg sm:text-xl max-w-xl mx-auto text-amber-800 mb-8">
    Connect with hundreds of street food vendors, list your stock, get group and individual orders, and boost your sales with real-time analytics.
  </p>
  <div class="flex flex-col sm:flex-row justify-center gap-4">
    <a href="#seller-features" class="inline-block bg-amber-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-600 transition">See Features</a>
    <button id="loginBtn" class="inline-block bg-amber-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-600 transition">Login</button>
    <button id="signUpBtn" class="inline-block bg-yellow-100 text-amber-700 border-2 border-amber-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-200 transition">Sign Up</button>
  </div>
</section>

<section id="seller-features" class="max-w-5xl mx-auto py-14 px-8 grid md:grid-cols-2 gap-12">
  <div>
    <h2 class="text-2xl font-bold text-amber-700 mb-4">Inventory Dashboard</h2>
    <p class="mb-2">Update product stock & pricing instantly. Let vendors see your real-time inventory.</p>
    <h2 class="text-2xl font-bold text-amber-700 mt-8 mb-4">Group Orders Portal</h2>
    <p>Accept large community orders and process efficiently with our automated tools.</p>
  </div>
  <div>
    <h2 class="text-2xl font-bold text-amber-700 mb-4">Order & Delivery Management</h2>
    <p class="mb-2">Get notifications for new orders. Track deliveries and communicate with buyers easily.</p>
    <h2 class="text-2xl font-bold text-amber-700 mt-8 mb-4">Trusted Seller Badge</h2>
    <p>Gain trust, ratings, and verification to stand out with vendors.</p>
  </div>
</section>

<section id="analytics" class="bg-amber-50 py-14 px-8 text-center">
  <h2 class="text-3xl font-bold mb-8 text-amber-600">Insights & Analytics</h2>
  <div class="grid gap-8 md:grid-cols-3">
    <div class="p-6 bg-white rounded shadow">
      <h3 class="font-bold mb-2 text-lg">Order Trends</h3>
      <p>See what products are in demand in real time.</p>
    </div>
    <div class="p-6 bg-white rounded shadow">
      <h3 class="font-bold mb-2 text-lg">Ratings & Feedback</h3>
      <p>Track your delivery performance and satisfaction ratings.</p>
    </div>
    <div class="p-6 bg-white rounded shadow">
      <h3 class="font-bold mb-2 text-lg">Sales Growth</h3>
      <p>Monitor monthly sales, best clients, and bulk opportunities.</p>
    </div>
  </div>
</section>

<!-- Integrated Contact Us Form (yellow style) -->
<section id="contact" class="py-14 px-8 bg-yellow-100">
  <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
    <h2 class="text-3xl font-bold text-amber-700 mb-2 text-center">Contact Us</h2>
    <p class="text-gray-700 mb-6 text-center">We'd love to hear from you. Please fill out the form below and we’ll respond as soon as possible.</p>
    <form class="space-y-6" autocomplete="off" onsubmit="event.preventDefault(); alert('Contact form submission');">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="contact-name" class="block font-semibold text-gray-800 mb-1">Name <span class="text-red-500">*</span></label>
          <input type="text" id="contact-name" required class="block w-full px-4 py-2 rounded border border-gray-300 focus:outline-amber-400" placeholder="Your Name" />
        </div>
        <div>
          <label for="contact-email" class="block font-semibold text-gray-800 mb-1">Email <span class="text-red-500">*</span></label>
          <input type="email" id="contact-email" required class="block w-full px-4 py-2 rounded border border-gray-300 focus:outline-amber-400" placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label for="contact-phone" class="block font-semibold text-gray-800 mb-1">Phone (optional)</label>
        <input type="tel" id="contact-phone" class="block w-full px-4 py-2 rounded border border-gray-300 focus:outline-amber-400" placeholder="Your Phone Number" />
      </div>
      <div>
        <label for="contact-message" class="block font-semibold text-gray-800 mb-1">Message <span class="text-red-500">*</span></label>
        <textarea id="contact-message" required rows="5" class="block w-full px-4 py-2 rounded border border-gray-300 focus:outline-amber-400 resize-none" placeholder="How can we help you?"></textarea>
      </div>
      <button type="submit" class="w-full md:w-auto mt-4 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-10 rounded-xl shadow transition">Send Message</button>
      <div class="text-xs text-center text-gray-500 mt-3">We’ll get back to you within 1 business day.</div>
    </form>
  </div>
</section>
`;

const root = document.getElementById('root');
let mode = 'vendor';

function switchSite(newMode) {
  if (mode === newMode) return;
  mode = newMode;
  root.classList.add('vanish');
  setTimeout(() => {
    root.innerHTML = newMode === 'vendor' ? vendorSite : sellerSite;
    attachSwitchEvents();
    root.classList.remove('vanish');
  }, 600);
}

function attachSwitchEvents() {
  if (document.getElementById('toSeller'))
    document.getElementById('toSeller').onclick = () => switchSite('seller');
  if (document.getElementById('toSellerMobile'))
    document.getElementById('toSellerMobile').onclick = () => switchSite('seller');
  if (document.getElementById('toVendor'))
    document.getElementById('toVendor').onclick = () => switchSite('vendor');
  if (document.getElementById('toVendorMobile'))
    document.getElementById('toVendorMobile').onclick = () => switchSite('vendor');
  if (document.getElementById('loginBtn'))
    document.getElementById('loginBtn').onclick = showLoginModal;
  if (document.getElementById('signUpBtn'))
    document.getElementById('signUpBtn').onclick = showSignUpModal;
}

// Modal handlers
function showLoginModal() {
  document.getElementById('login-modal').setAttribute('aria-hidden', 'false');
  document.getElementById('login-close').focus();
}
function showSignUpModal() {
  document.getElementById('signup-modal').setAttribute('aria-hidden', 'false');
  document.getElementById('signup-close').focus();
}
function closeModal(modalId) {
  document.getElementById(modalId).setAttribute('aria-hidden', 'true');
}
document.getElementById('login-close').onclick = () => closeModal('login-modal');
document.getElementById('signup-close').onclick = () => closeModal('signup-modal');
document.getElementById('login-modal').onclick = function (e) {
  if (e.target === this) closeModal('login-modal');
};
document.getElementById('signup-modal').onclick = function (e) {
  if (e.target === this) closeModal('signup-modal');
};

window.addEventListener('DOMContentLoaded', () => {
  root.innerHTML = vendorSite;
  attachSwitchEvents();
});