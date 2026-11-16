export class TextBoxPage {

    constructor(page) {

        this.page = page;

        this.fullName = page.locator('#userName');
        this.email = page.locator('#userEmail');
        this.currentAddress = page.locator('#currentAddress');
        this.permanentAddress = page.locator('#permanentAddress');
        this.submit = page.locator('#submit');

    }

    async openPage() {

        await this.page.goto('https://demoqa.com/text-box');

    }

    async fillForm(data) {

        await this.fullName.fill(data.name);
        await this.email.fill(data.email);
        await this.currentAddress.fill(data.currentAddress);
        await this.permanentAddress.fill(data.permanentAddress);

    }

    async clickSubmit() {

        await this.submit.click();

    }

}