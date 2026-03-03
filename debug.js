import puppeteer from 'puppeteer';

(async () => {
    console.log('Starting puppeteer...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Catch console logs
    page.on('console', msg => {
        console.log(`[Browser Console ${msg.type().toUpperCase()}]: ${msg.text()}`);
    });

    // Catch page errors
    page.on('pageerror', err => {
        console.error('[Browser Page Error]:', err.message);
    });

    console.log('Navigating to http://localhost:5173...');
    try {
        await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 10000 });
        console.log('Navigation complete.');
    } catch (e) {
        console.error('Navigation error:', e.message);
    }

    await browser.close();
    console.log('Done.');
})();
