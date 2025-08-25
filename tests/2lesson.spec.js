import { test, expect } from '@playwright/test';

const URL = 'file:///Users/sniper/pw4/demo.html';

test('Поиск элемента ID', async ({ page }) => {
	// arrange или настройка, предусловие
	await page.goto(URL);

	await page.locator('#email').click();
	await page.locator('#email').fill('d@ya.ru');
	await page.locator('#password').click();
	await page.locator('#password').fill('superPassword');
	await page.locator('#btn').click();

	await expect(page.locator('#welcome-txt')).toContainText('Привет');
});
test('Поиск элемента по атрибуту', async ({ page }) => {
	// arrange или настройка, предусловие
	await page.goto(URL);
	await page.locator('[name="email"]').click();
	await page.locator('[name="email"]').fill('d@ya.ru');
	await page.locator('[id="password"]').click();
	await page.locator('[id="password"]').fill('superPassword');
	await page.locator('[id="btn"]').click();

	await expect(page.locator('[id="welcome-txt"]')).toContainText('Привет');
});
test('Поиск элемента по семантическим селекторы', async ({ page }) => {
	await page.goto(URL);
	await page.getByPlaceholder('Email').click();
	await page.getByPlaceholder('Email').fill('d@ya.ru');
	await page.getByPlaceholder('Пароль').click();
	await page.getByPlaceholder('Пароль').fill('superPassword');
	await page.getByRole('button', { name: 'Войти' }).click();
	await expect(page.locator('[id="welcome-txt"]')).toContainText('Привет');
});

test('Поиск элемента по классу', async ({ page }) => {
	// arrange или настройка, предусловие
	await page.goto(URL);
	//	await page.locator('.el-input__inner').first().click();
	//	Будет работать по тексту, но не плейсхолдеру await page.locator('.el-input__inner').filter({ hasText: 'Email' }).click();

	await page
		.locator('.el-input__wrapper')
		.filter({ has: page.locator('#email') })
		.click();

	await page.locator('.el-input__inner').first().fill('d@ya.ru');
	// last
	await page.locator('.el-input__inner').nth(1).click();

	await page.locator('.el-input__inner').nth(1).fill('superPassword');
	await page.locator('[id="btn"]').click();

	await expect(page.locator('[id="welcome-txt"]')).toContainText('Привет');
});

//page.locator('xpath=//input[@id='email]').click();