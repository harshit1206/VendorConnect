    // Buyer Landing (Vendor)
    const buyerPage = `
      <nav class="flex justify-between items-center px-8 py-5 bg-white shadow">
        <span class="font-extrabold text-2xl text-green-700 tracking-tight">VendorConnect</span>
        <div class="flex gap-5 text-green-900 font-semibold">
          <a href="#" class="hover:text-green-600">Features</a>
          <a href="works.html" class="hover:text-green-600">How It Works</a>
          <a href="community.html" class="hover:text-green-600">Community</a>
          <a href="#" class="hover:text-green-600">Contact</a>
        </div>
        <a id="toSellerBtn" class="px-5 py-2 rounded bg-green-700 text-white font-bold shadow hover:bg-green-800 transition cursor-pointer">I AM A SELLER</a>
      </nav>
      <main class="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-700 mb-4 mt-10">Source Ingredients. Save Hours Daily.</h1>
        <p class="text-lg sm:text-xl text-green-800 mb-10 max-w-xl">
          Find nearby suppliers, compare prices, team up for bulk orders— all in one app built for street food vendors.
        </p>
        <div class="flex flex-wrap gap-4 justify-center mb-10">
          <a href="#" class="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-lg text-lg shadow transition">SEE FEATURES</a>
          <a href="#" class="bg-white border border-green-700 text-green-700 font-bold px-8 py-3 rounded-lg text-lg transition shadow hover:bg-green-50">LOGIN</a>
          <a href="#" class="bg-green-50 border border-green-700 text-green-700 font-bold px-8 py-3 rounded-lg text-lg transition shadow hover:bg-green-100">SIGN UP</a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mx-auto bg-transparent">
          <div class="space-y-6">
            <div>
              <h3 class="font-bold text-green-700 text-lg mb-2">Smart Supplier Discovery</h3>
              <p class="text-green-900">Find suppliers within 5km, filter by products, and view ratings instantly.</p>
            </div>
            <div>
              <h3 class="font-bold text-green-700 text-lg mb-2">Group Ordering</h3>
              <p class="text-green-900">Join with nearby food vendors to place joint orders for better rates.</p>
            </div>
          </div>
          <div class="space-y-6">
            <div>
              <h3 class="font-bold text-green-700 text-lg mb-2">Live Price Comparison</h3>
              <p class="text-green-900">Instantly compare prices and get notified when your required ingredient is at the best price.</p>
            </div>
            <div>
              <h3 class="font-bold text-green-700 text-lg mb-2">Quality & Trust</h3>
              <p class="text-green-900">View verified badges, supplier ratings, and dispute resolution for every deal.</p>
            </div>
          </div>
        </div>
      </main>
    `;

    // Seller Landing
    const sellerPage = `
      <nav class="flex justify-between items-center px-8 py-5 bg-amber-50 shadow">
        <span class="font-extrabold text-2xl text-amber-600 tracking-tight">VendorConnect Seller</span>
        <div class="flex gap-5 text-amber-900 font-semibold">
          <a href="#" class="hover:text-amber-600">Supplier Features</a>
          <a href="analytics.html" class="hover:text-amber-600">Analytics</a>
          <a href="#" class="hover:text-amber-600">Quality</a>
          <a href="#" class="hover:text-amber-600">Support</a>
        </div>
        <a id="toVendorBtn" class="px-5 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition cursor-pointer">SWITCH TO VENDOR</a>
      </nav>
      <main class="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-amber-700 mb-4 mt-10">Sell Smart. Reach More Vendors.</h1>
        <p class="text-lg sm:text-xl text-amber-800 mb-10 max-w-xl">
          Connect with hundreds of street food vendors, list your stock, get group and individual orders, and boost your sales with real-time analytics.
        </p>
        <div class="flex flex-wrap gap-4 justify-center mb-10">
          <a href="#" class="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg text-lg shadow transition">SEE FEATURES</a>
          <a href="#" class="bg-white border border-amber-700 text-amber-700 font-bold px-8 py-3 rounded-lg text-lg transition shadow hover:bg-amber-100">LOGIN</a>
          <a href="#" class="bg-yellow-50 border border-amber-700 text-amber-700 font-bold px-8 py-3 rounded-lg text-lg transition shadow hover:bg-yellow-100">SIGN UP</a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mx-auto bg-transparent">
          <div class="space-y-6">
            <div>
              <h3 class="font-bold text-amber-700 text-lg mb-2">Inventory Dashboard</h3>
              <p class="text-amber-900">Update product stock & pricing instantly. Let vendors see your real-time inventory.</p>
            </div>
            <div>
              <h3 class="font-bold text-amber-700 text-lg mb-2">Order & Delivery Management</h3>
              <p class="text-amber-900">Get notifications for new orders. Track deliveries and communicate with buyers easily.</p>
            </div>
          </div>
          <div class="space-y-6">
            <div>
              <h3 class="font-bold text-amber-700 text-lg mb-2">Group Orders Portal</h3>
              <p class="text-amber-900">Accept large community orders and process efficiently with our automated tools.</p>
            </div>
            <div>
              <h3 class="font-bold text-amber-700 text-lg mb-2">Trusted Seller Badge</h3>
              <p class="text-amber-900">Gain trust, ratings, and verification to stand out with vendors.</p>
            </div>
          </div>
        </div>
      </main>
    `;

    const root = document.getElementById('root');
    function showVendor() {
      root.innerHTML = buyerPage;
      setTimeout(() => {
        const btn = document.getElementById('toSellerBtn');
        if (btn) btn.onclick = showSeller;
      }, 40);
    }
    function showSeller() {
      root.innerHTML = sellerPage;
      setTimeout(() => {
        const btn = document.getElementById('toVendorBtn');
        if (btn) btn.onclick = showVendor;
      }, 40);
    }
    // Initial render: Vendor by default
    showVendor();