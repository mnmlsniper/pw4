import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
	// arrange или настройка, предусловие
	await page.goto('https://todomvc.com/examples/vue/dist/#/');
    console.log(process.env);
    console.log(process.env.SECRET);
    console.log(process.env.STEP);


	await expect(
		page.getByRole('textbox', { name: 'What needs to be done?' }),
	).toBeEmpty();
});
