/**
 * IndexNow Auto-Submit Script
 * Runs after build to notify Bing/Yandex of all pages
 */

const INDEXNOW_KEY = "279a5d8de0cf47d5b7125496b5e3fc16";
const SITE_URL = "https://wearewacky.com";

// All pages to submit
const PAGES = [
  "/",
  "/about",
  "/services",
  "/portfolio",
  "/contact",
  "/pricing",
  "/faq",
  "/blog",
  "/terms",
  "/privacy",
];

async function submitToIndexNow() {
  console.log("🚀 Submitting pages to IndexNow...");
  
  const fullUrls = PAGES.map(page => `${SITE_URL}${page}`);
  
  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: "wearewacky.com",
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: fullUrls,
      }),
    });

    if (response.ok || response.status === 202) {
      console.log(`✅ Successfully submitted ${fullUrls.length} URLs to IndexNow!`);
      console.log("   Pages:", PAGES.join(", "));
      return true;
    } else {
      console.log(`⚠️ IndexNow returned status: ${response.status}`);
      // Don't fail the build for IndexNow issues
      return true;
    }
  } catch (error) {
    console.log("⚠️ IndexNow submission failed (non-critical):", error.message);
    // Don't fail the build for IndexNow issues
    return true;
  }
}

submitToIndexNow();

