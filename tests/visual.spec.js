import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
	// arrange или настройка, предусловие
	await page.goto('https://realworld.qa.guru/');
    await expect(page.locator('.navbar-brand')).toBeVisible();
    await expect(page).toHaveScreenshot( 'homepage.png', { fullPage: true, animations: 'disabled', mask: [
        page.locator('.counter'),
        page.locator('.date'),
    ] });
const pageContent = await page.locator('body').innerText();
expect(pageContent).toMatchSnapshot('realWorldHome.txt');
});


test('Скриншот с моком данных', async ({ page }) => {

await page.route('**/tags', async (route) => {
    const json = { tags: ['пятничка']};
    await route.fulfill({ json });
});

    await page.goto('https://realworld.qa.guru/');
    await expect(page.locator('.navbar-brand')).toBeVisible();
    await expect(page).toHaveScreenshot( 'homepageWithMockData.png', { fullPage: true, animations: 'disabled', mask: [
        page.locator('.counter'),
        page.locator('.date'),
    ] });

});

test('Скриншот с добавлением данных', async ({ page }) => {
    const mockName = 'Константинопольский Константин Константинович';

    await page.route('**/tags', async (route) => {
        const response = await route.fetch();
        const json = await response.json();
        json.tags.unshift(mockName);
        await route.fulfill({ json });
    });
    
        await page.goto('https://realworld.qa.guru/');
        await expect(page.getByRole('button', { name: mockName })).toBeVisible();


        await expect(page).toHaveScreenshot( 'homepageWithMockEditData.png', { fullPage: true, animations: 'disabled', mask: [
            page.locator('.counter'),
            page.locator('.date'),
        ] });
    
    });
    

/*
	await page.goto('https://realworld.qa.guru/');
    await page.getByRole('link', { name: 'Sign up' }.click();
    const emailInput = page.getByRole('textbox', { name: 'Email' });
    await expect (emailInput).toHaveScreenshot('emailInput.png');
    await emailInput.focus();
    await expect (emailInput).toHaveScreenshot('emailInputFocus.png');
    await emailInput.fill('test@test.com');
    await expect (emailInput).toHaveScreenshot('emailInputFilled.png');

    await mount (Counter, 5);
    await component.getByRole('button', { name: 'Increment' }).click();





    */

