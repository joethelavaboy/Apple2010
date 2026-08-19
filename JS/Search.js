/* ========================================================= */
/* APPLE 2010 SITE SEARCH ARCHITECTURE INTERCEPTOR           */
/* ========================================================= */
var AppleSearchEngine = {
    init: function() {
        // Automatically check the address bar parameters (?q=keyword)
        var urlParams = new URLSearchParams(window.location.search);
        var searchQuery = urlParams.get('q');

        // Locate layout containers matching unified.css structural selectors
        var storeBox = document.getElementById('store-results');
        var supportBox = document.getElementById('support-results');
        var itunesBox = document.getElementById('itunes-results');
        var instructionField = document.getElementById('search-status-instruction');
        var titleHeader = document.getElementById('dynamic-search-title');

        // 1. DEFAULT BLANK VIEW STATE
        if (!searchQuery) {
            if (titleHeader) titleHeader.innerText = "Search Results";
            if (instructionField) {
                instructionField.style.display = 'block';
				instructionField.innerText = "Enter a search term in the field above.";
            }
            return;
        }

        searchQuery = decodeURIComponent(searchQuery).toLowerCase().trim();

        // Sync inputs automatically across both the navigation bar and the center page bar
        var textInputs = document.querySelectorAll('input[type="text"]');
        textInputs.forEach(function(input) { input.value = searchQuery; });

        // 2. CONDITION: USER SEARCHES FOR IPAD (Official word-for-word marketing text)
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

        // 3. CONDITION: USER SEARCHES FOR IPHONE OR IPHONE 4
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

        // 4. CONDITION: GIBBERISH / NO SEARCH MATCH
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
