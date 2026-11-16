import { test, expect } from '@playwright/test';

test('AGOS Chat Validation', async ({ page }) => {

    // Open Flight List
    await page.goto('https://qa.wb.agosaviation.com/login');
    const textBoxes = page.locator('input');

    // Username field (first input)
    await textBoxes.nth(0).click();
    await page.keyboard.type('mitali.mhatre@neebal.com');

    // Password field (second input)
    await textBoxes.nth(1).click();
    await page.keyboard.type('Agos@2026');

    // Click Submit/Login button
    await page.getByRole('button').click();
    console.log('Login button clicked');
    await page.waitForTimeout(3000);

    // await page.waitForLoadState('networkidle');

    // console.log('Flight List page opened');

    /// Flight List page
    await expect(page.getByText('Flight List', { exact: true })).toBeVisible({ timeout: 15000 });
    console.log('Flight List page opened');

    // Click on Master management tab
  await page.getByText('Master Management', { exact: true }).click();

console.log('Master Management dropdown opened');

const masterMenu = page.getByRole('list', {
    name: 'Master Management'
});

await expect(masterMenu).toBeVisible();

await masterMenu.getByText('Airline Management', {
    exact: true
}).click();
await page.waitForTimeout(2000);

console.log('Airline Management selected');

// Verify Airline List page is opened
await expect(
    page.getByText('Airline List', { exact: true })
).toBeVisible();

console.log('Airline List page opened');

// Click on edit button of Alerce Airlines
const airlineRow = page.locator('tr').filter({
    hasText: 'Alerce Airlines'
});

await expect(airlineRow).toBeVisible();

console.log('Alerce Airlines row found');

await airlineRow.locator('img.btn-icon[src*="edit.svg"]').click();

await page.waitForTimeout(2000);

console.log('Edit button clicked for Alerce Airlines');


await expect(
    page.getByText('Edit Airline', { exact: true })
).toBeVisible();

console.log('Edit Airline page opened');

await page.waitForTimeout(2000);

// Click on configure chat button
const configureChatButton = page.getByRole('button', {
    name: 'Configure Chat',
    exact: true
});

await expect(configureChatButton).toBeVisible();

await configureChatButton.scrollIntoViewIfNeeded();

await configureChatButton.click();

console.log('Configure Chat button clicked');
await page.waitForTimeout(2000);

// Verify Chat Configuration page
await expect(
    page.getByText('Chat Configuration for Alerce Airlines', {
        exact: true
    })
).toBeVisible();

console.log('Chat Configuration for Alerce Airlines page opened');


// Set Chat group creation timing
const chatTiming = page.locator('input[placeholder="hrs"]');

await expect(chatTiming).toBeVisible();

await chatTiming.fill('2');
await page.waitForTimeout(2000);

console.log('Chat group creation timing updated from 3 to 2');

// Click on Save button
const saveButton = page.getByRole('button', {
    name: 'Save',
    exact: true
});

await expect(saveButton).toBeVisible();

await saveButton.click();
await page.waitForTimeout(2000);

console.log('Save button clicked');

// Click on Load planning tab
const loadPlanning = page.getByText('Load Planning', {
    exact: true
});

await expect(loadPlanning).toBeVisible();

await loadPlanning.click();
await page.waitForTimeout(2000);

console.log('Load Planning tab clicked');

// Create flight flow
   
     await page.getByRole('button', { name: 'Create Flight' }).click();
     await page.waitForTimeout(3000);

  
     await page.getByPlaceholder('Select an airline').click();
     await page.keyboard.type('Alerce Airlines');
     await page.keyboard.press('ArrowDown');
     await page.keyboard.press('Enter');
     await page.waitForTimeout(3000);

    // Select Aircraft Registration
const aircraftDropdown = page
    .getByRole('dialog')
    .locator('ng-select')
    .filter({ hasText: 'Enter registration' })
    .getByRole('combobox');

await aircraftDropdown.click();

await aircraftDropdown.fill('F-AGOS9');

await page.getByLabel('Options List').getByText('F-AGOS9', { exact: true }).click();

console.log('Aircraft Registration selected: F-AGOS9');


//Wait for dropdown options
await page.getByText('Aircraft Reg*').click();

// Search
await page.keyboard.type('F-AGOS9');

// Select the value
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');



console.log('Aircraft Registration selected: F-AGOS9');

/// Aircraft Registration already selected
console.log('Aircraft Registration selected: F-AGOS9');

// Flight Number
const flightNumber = page.getByRole('textbox', { name: 'Flight Number' });

await expect(flightNumber).toBeVisible();
await flightNumber.fill('50004');

console.log('Flight Number entered: 50004');




     
    // Departure and Arrival Station

const stationDropdowns = page
    .getByRole('dialog')
    .locator('ng-select')
    .filter({ hasText: 'Enter station' });

console.log('Station dropdown count:', await stationDropdowns.count());

// Departure Station
const departureStation = stationDropdowns.first();

await departureStation.locator('input[role="combobox"]').click();
await departureStation.locator('input[role="combobox"]').fill('BCN');

await page.getByText('BCN', { exact: true }).last().click();

console.log('Departure Station selected: BCN');

// Arrival Station
const arrivalStation = stationDropdowns.last();

await arrivalStation.locator('input[role="combobox"]').click();
await arrivalStation.locator('input[role="combobox"]').fill('DEL');

await page.getByText('DEL', { exact: true }).last().click();

console.log('Arrival Station selected: DEL');

     const dateTimeInputs = page.getByRole('dialog').locator('input');

await dateTimeInputs.nth(6).fill('09-Sep-2026');
await dateTimeInputs.nth(7).fill('11:00');

await dateTimeInputs.nth(8).fill('09-Sep-2026');
await dateTimeInputs.nth(9).fill('11:10');

console.log('STD/STA date and time entered');
 
     // Create Flight
     await page
    .getByRole('dialog')
    .getByRole('button', { name: 'Create Flight', exact: true })
    .click();


console.log('Flight created successfully');

// Confirmation popup
const createFlightPopup = page.getByRole('dialog').filter({
    hasText: 'Are you sure you want to create this flight?'
});

await expect(createFlightPopup).toBeVisible();

console.log('Create Flight confirmation popup displayed');

// Click Create button inside confirmation popup
await createFlightPopup
    .getByRole('button', { name: 'Create', exact: true })
    .click();

console.log('Create button clicked in confirmation popup');



// Open Chat page directly
await page.goto('http://agos-qa-flight-load-management-system.s3-website.ap-south-1.amazonaws.com/load-planning/chat');
console.log('Chat page opened');
await page.waitForTimeout(3000);
console.log('Current URL:', page.url());

// Verify Chat page
await expect(page).toHaveURL(/\/load-planning\/chat/);
console.log('Chat URL verified');
await page.waitForTimeout(2000);


// Select Flight Group


let flightGroup = page.getByText('KF50004_F-AGOS9_09/Sep',{ exact: true });
console.log('KF50004 count:',await flightGroup.count());
await expect(flightGroup).toBeVisible({timeout: 15000});
await flightGroup.click();
await page. waitForTimeout(2000);
console.log('KF50004_F-AGOS9_09/Sep selected');



// Send Hello message


let messageBox = page.getByPlaceholder('Message...');
await expect(messageBox).toBeVisible({timeout: 10000});
console.log('Message box visible');

await messageBox.fill('Hello');
await page.waitForTimeout(1000);
await messageBox.press('Enter');
await page.waitForTimeout(1000);
await messageBox.fill('Agos');
await page.waitForTimeout(1000);
await messageBox.press('Enter');
await page.waitForTimeout(1000);
await messageBox.fill('Hello Agos');
await page.waitForTimeout(1000);
await messageBox.press('Enter');
await page.waitForTimeout(1000);


// Click + icon / Attach files
await page.getByTitle('Attach files').click();
console.log('Attach Files clicked');

// Verify Select Document Type popup
await expect(page.getByText('Select Document Type', { exact: true })).toBeVisible();
console.log('Select Document Type popup opened');

// Select LDS
await page.getByText('LDS', { exact: true }).click();
console.log('LDS selected');
await page.waitForTimeout(1000);

// Click Upload File and wait for file chooser
const fileChooserPromise = page.waitForEvent('filechooser');
await page.getByText('Upload File', { exact: true }).click();
console.log('Upload File clicked');
await page.waitForTimeout(1000);

// Get the file chooser
const fileChooser = await fileChooserPromise;

// Select PDF file
await fileChooser.setFiles('/home/neebal/Documents/TestLink 1.9.18 (Moka pot).pdf');
await fileChooser.setFiles('/home/neebal/Documents/TestLink 1.9.16 (Moka pot).pdf');
await fileChooser.setFiles('/home/neebal/Documents/TestLink 1.9.17 (Moka pot).pdf');
await page.waitForTimeout(1000);
console.log('File selected');

await messageBox.press('Enter');
console.log('Message sent');

// Verify documents message is visible
await expect(page.getByText('Shared 3 documents:', { exact: true }).last()).toBeVisible();
console.log('Shared 3 documents message is visible');

await expect(page.getByText('TestLink 1.9.18 (Moka pot).pdf', { exact: true }).last()).toBeVisible();
console.log('First document is visible');

await expect(page.getByText('TestLink 1.9.16 (Moka pot).pdf', { exact: true }).last()).toBeVisible();
console.log('Second document is visible');

await expect(page.getByText('TestLink 1.9.17 (Moka pot).pdf', { exact: true }).last()).toBeVisible();
console.log('Third document is visible');




// Select flight group
await page.getByText('KF50004_F-AGOS9_09/Sep',{ exact: true }).click();
console.log('KF50004_F-AGOS9_09/Sep selected');

// Click Documents tab
await page.getByText('Documents', { exact: true }).click();
await page.waitForTimeout(1000);
console.log('Documents tab clicked');

// Verify Documents tab is visible
await expect(page.getByText('Documents', { exact: true })).toBeVisible();

// Click Participants tab
await page.getByText('Participants', { exact: true }).click();
await page.waitForTimeout(1000);
console.log('Participants tab clicked');

// Verify Participants tab is visible
await expect(page.getByText('Participants', { exact: true })).toBeVisible();
await page.getByText('Add Participant', { exact: true }).click();
console.log('Add Participant button clicked');


// Search participant
await page.getByRole('textbox', { name: 'Search by name' }).fill('amol.patole@neebal.com');
console.log('Participant searched');
await page.getByRole('button', { name: 'Close' }).click();
console.log('Add participants popup closed');
// await expect(page.getByText('Documents', { exact: true })).toBeVisible();
// await page.waitForTimeout(1000);
// await page.getByText('Documents', { exact:true }).click();
// console.log('Documents tab clicked');
// await page.waitForTimeout(1000);

// await page.getByText('UWS', { exact: true }).click();
// await page.waitForTimeout(2000);
// console.log('LDS document selected');
// await page.waitForTimeout(2000);

// //await page.load()
// await page.getByRole('button', { name: 'bi bi-download' }).click();
// await page.waitForTimeout(1000);
// console.log('Download button clicked');


// Select participant
// await page.getByText(

    
//     'amol.patole@neebal.com',
//     { exact: true }
// ).click();

// console.log('Participant selected');


// let flightGroup1 = page.getByText(
//     'VP7711_VP1705_28/Jul',
//     { exact: true }
// );

// console.log(
//     'VP7711 count:',
//     await flightGroup1.count()
// );

// await expect(flightGroup1).toBeVisible({
//     timeout: 15000
// });

// await flightGroup1.click();
// await page. waitForTimeout(2000);
// console.log(
//     'VP7711_VP1705_28/Jul selected'
// );


// // Search participant name
// // await page.getByRole('textbox', { name: 'Search by name' }).fill('amol.patole@neebal.com');

// // // Select searched participant
// // await page.getByText('amol.patole@neebal.com', { exact: true }).click();



// //     // Click Add/Confirm button
// //     await page.getByRole('button', { name: 'Add' }).click();

// //     console.log('Participant added successfully');

// await page.getByText('amol.patole@neebal.com', {
//     exact: false
// }).locator('..').getByRole('checkbox').check();

// console.log('Participant selected');



// await page.selectOption('#dropdown-trigger','Contributor');

// console.log('Role selected');

// await page.waitForTimeout(1000);


await page.locator('button:has-text(" Manage ")').click();
await page.waitForTimeout(1000);
console.log(' Manage button clicked');

await expect(page.getByText('Manage Participants', { exact: true })).toBeVisible();
await page.waitForTimeout(1000);

await expect(
    page.locator('#mat-mdc-dialog-1')
        .getByText('Prashik Gamre', { exact: true })
).toBeVisible();

console.log('Prashik Gamre is visible');
await page.waitForTimeout(1000);
await page.selectOption('#dropdown-trigger ng-star-inserted', ' Contributor ');

console.log(await page.inputValue('#dropdown-trigger ng-star-inserted'));

await page.waitForTimeout(1000);
});