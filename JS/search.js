/* ========================================================= */
/* APPLE 2010 SITE SEARCH ENGINE - LOCAL JAVASCRIPT SYSTEM    */
/* ========================================================= */
var AppleSearchEngine = {
    init: function() {
        // 1. DYNAMIC PRESENTATION FIX: Force layout boundaries and center the columns directly in the browser memory
        var designOverride = document.createElement('style');
        designOverride.type = 'text/css';
        designOverride.innerHTML = `
            #main, .search-results {
                width: 980px !important;
                margin: 0 auto !important;
                padding: 40px 0 !important;
                display: block !important;
                float: none !important;
            }
            #content, .grid2col {
                display: block !important;
                width: 100% !important;
            }
            #search-results-container {
                display: block !important;
                width: 710px !important;
                margin-top: 25px !important;
            }
            .results-section h2 {
                font-size: 16px !important;
                font-weight: bold !important;
                color: #111 !important;
                border-bottom: 1px dashed #d1d1d1 !important;
                padding-bottom: 5px !important;
                margin: 25px 0 15px 0 !important;
            }
            .result-item {
                margin-top: 15px !important;
                margin-bottom: 25px !important;
                font-family: "Lucida Grande", Helvetica, Arial, sans-serif !important;
            }
            .result-item h3 a {
                font-size: 14px !important;
                font-weight: bold !important;
                color: #0088cc !important;
                text-decoration: none !important;
            }
            .result-item h3 a:hover { text-decoration: underline !important; }
            .result-item p { font-size: 12px !important; color: #333 !important; line-height: 1.4 !important; }
            .result-item .url { color: #006600 !important; font-size: 11px !important; }
        `;
        document.head.appendChild(designOverride);

        // 2. Automatically check the live address bar tracking parameters (?q=keyword)
        var urlParams = new URLSearchParams(window.location.search);
        var searchQuery = urlParams.get('q');

        // Locate original container landmarks inside your archived text blocks
        var storeBox = document.getElementById('store-results') || document.querySelector('.store');
        var supportBox = document.getElementById('support-results') || document.querySelector('.support');
        var itunesBox = document.getElementById('itunes-results') || document.querySelector('.itunes');
        var instructionField = document.getElementById('search-status-instruction') || document.querySelector('#main p');
        var titleHeader = document.getElementById('dynamic-search-title') || document.querySelector('h1');

        // 3. BLANK STATE DEFAULT: If URL parameter is empty, maintain the clean empty look
        if (!searchQuery) {
            if (titleHeader) titleHeader.innerText = "Search Results";
            if (instructionField) {
                instructionField.style.display = 'block';
                instructionField.innerText = "Enter a search term in the field above.";
            }
            if (storeBox) storeBox.innerHTML = '';
            if (supportBox) supportBox.innerHTML = '';
            if (itunesBox) itunesBox.innerHTML = '';
            return;
        }

        searchQuery = decodeURIComponent(searchQuery).toLowerCase().trim();

        // Push text inputs back inside input boxes uniformly
        var textInputs = document.querySelectorAll('input[type="text"]');
        textInputs.forEach(function(input) { input.value = searchQuery; });

        // 4. CONDITION 1: USER QUERIES 'IPAD'
        if (searchQuery === "ipad") {
            if (titleHeader) titleHeader.innerText = "Search Results for 'ipad'";
            if (instructionField) instructionField.style.display = 'none';

            if (storeBox) {
                storeBox.innerHTML = `
                    <div class="result-item">
                        <h3><a href="../ipad/">Apple - iPad - It's a magical and revolutionary device...</a></h3>
                        <p>The best way to experience the web, email, photos, and video on a magical and revolutionary device. Starting at $499.</p>
                        <span class="url">://apple.com</span>
                    </div>`;
            }
            if (supportBox) {
                supportBox.innerHTML = `
                    <div class="result-item">
                        <h3><a href="../support/manuals/ipad/">Apple - Support - Manuals - iPad</a></h3>
                        <p>Browse product manuals, user guides, tech specs, and getting started documentation for iPad running iPad OS 3.2.</p>
                        <span class="url">://apple.com</span>
                    </div>`;
            }
            if (itunesBox) {
                itunesBox.innerHTML = `
                    <div class="result-item">
                        <h3><a href="../itunes/">iBooks App for iPad on the iTunes App Store</a></h3>
                        <p>Download the free iBooks app to browse, buy, and read classic literature on a brilliant high-resolution screen.</p>
                        <span class="url">://apple.com</span>
                    </div>`;
            }

        // 5. CONDITION 2: USER QUERIES 'IPHONE' OR 'IPHONE 4'
        } else if (searchQuery === "iphone" || searchQuery === "iphone 4") {
            if (titleHeader) titleHeader.innerText = "Search Results for '" + searchQuery + "'";
            if (instructionField) instructionField.style.display = 'none';

            if (storeBox) {
                storeBox.innerHTML = `
                    <div class="result-item">
                        <h3><a href="../iphone/">Apple - iPhone - This changes everything. Again.</a></h3>
                        <p>All-new design with FaceTime video calling, Retina display, 5 megapixel camera, and HD video recording. Free bumper case program open until September 30.</p>
                        <span class="url">://apple.com</span>
                    </div>`;
            }
            if (supportBox) {
                supportBox.innerHTML = `
                    <div class="result-item">
                        <h3><a href="../support/iphone/">Apple - Support - iPhone cellular reception and networks</a></h3>
                        <p>Find troubleshooting assistants for your smartphone antenna, ordering diagnostic tools, and configuring iOS 4 settings.</p>
                        <span class="url">://apple.com</span>
                    </div>`;
            }
            if (itunesBox) {
                itunesBox.innerHTML = `<p style="color:#666; font-size:12px; padding:10px 0; font-family:sans-serif;">No iTunes results found matching your query.</p>`;
            }

        // 6. FALLBACK MODE: GIBBERISH INPUTS
        } else {
            if (titleHeader) titleHeader.innerText = "Search Results for '" + searchQuery + "'";
            if (instructionField) {
                instructionField.style.display = 'block';
                instructionField.innerText = "Sorry, no matches were found. Please try a different search.";
            }
            if (storeBox) storeBox.innerHTML = '';
            if (supportBox) supportBox.innerHTML = '';
            if (itunesBox) itunesBox.innerHTML = '';
        }
    }
};
