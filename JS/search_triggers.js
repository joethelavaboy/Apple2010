/* ========================================================= */
/* APPLE 2010 SEARCH ENGINE ENGINE RUNNER                    */
/* ========================================================= */

// Safely execute the custom initializer once the document finishes parsing
document.addEventListener("DOMContentLoaded", function() {
    if (typeof AppleSearchEngine !== 'undefined') {
        AppleSearchEngine.init();
    }
});
