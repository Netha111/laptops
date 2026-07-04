const { chromium } = require("@playwright/test");

(async () => {
  const browser = await chromium.launch();
  const context = await browser.createContext();
  const page = await context.newPage();
  
  // Test desktop viewport
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("http://localhost:3000/understanding");
  await page.waitForLoadState("networkidle");
  
  // Wait a moment for animations to settle
  await page.waitForTimeout(1000);
  
  // Take desktop screenshot
  await page.screenshot({ path: "desktop.png" });
  console.log("Desktop screenshot: OK");
  
  // Test tablet viewport
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.screenshot({ path: "tablet.png" });
  console.log("Tablet screenshot: OK");
  
  // Test mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });
  await page.screenshot({ path: "mobile.png" });
  console.log("Mobile screenshot: OK");
  
  // Check that all major elements are present
  const headingText = await page.locator("h1").textContent();
  const cardCount = await page.locator(".edu-card").count();
  console.log(`Page Title: ${headingText}`);
  console.log(`Education Cards Found: ${cardCount}`);
  
  if (cardCount === 6) {
    console.log("✓ All 6 education cards rendered");
  } else {
    console.log(`✗ Expected 6 cards, found ${cardCount}`);
  }
  
  await browser.close();
})();
