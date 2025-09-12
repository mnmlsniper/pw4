import { test } from '@playwright/test';

export class MainPage {
	constructor(page) {
		// техническое описание страницы
		this.signupLink = page.getByRole('link', { name: 'Sign up' });
		this.loginLink = page.getByRole('link', { name: 'Login' });
	}

	// бизнесовые действия со страницой
	async gotoRegister() {
		return test.step('Переход на страницу регистрации', async (step) => {
			await this.signupLink.click();

		});
	}
}
