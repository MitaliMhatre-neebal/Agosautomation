// import { test } from '@playwright/test';
// import empdata from './empdata.json';

// test('Read Employee JSON Data', async () => {

//     console.log(empdata);

// });


import { test } from '@playwright/test';
import empdata from './empdata.json';

test('Print Employee Information', async () => {

    for (const employee of empdata.employees) {

        console.log("Employee Name :", employee.name);
        console.log("Employee ID   :", employee.employeeId);
        console.log("Designation   :", employee.designation);

    }

});

