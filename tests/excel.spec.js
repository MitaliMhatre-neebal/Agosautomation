//import { test } from '@playwright/test';

// import ExcelJS from 'exceljs';

// test('Excel Example', async () => {

//     const workbook = new ExcelJS.Workbook();

//     console.log("Workbook Created");

// });

// import ExcelJS from 'exceljs';

// async function createExcel() {

//     // Create Workbook

//     const workbook = new ExcelJS.Workbook();

//     // Create Worksheet

//     const worksheet = workbook.addWorksheet("Employees");

//     // Create Columns

//     worksheet.columns = [

//         {

//             header: "ID",

//             key: "id",

//             width: 10

//         },

//         {

//             header: "Name",

//             key: "name",

//             width: 25

//         },

//         {

//             header: "Department",

//             key: "department",

//             width: 20

//         }

//     ];

//     // Add Row 1

//     worksheet.addRow({

//         id: 101,

//         name: "Rahul",

//         department: "QA"

//     });

//     // Add Row 2

//     worksheet.addRow({

//         id: 102,

//         name: "Priya",

//         department: "Automation"

//     });

//     // Add Row 3

//     worksheet.addRow({

//         id: 103,

//         name: "Pooja",

//         department: "Automation"

//     });
    

//     // Save Excel File

//     await workbook.xlsx.writeFile("EmployeeData.xlsx");

//     console.log("Excel File Created Successfully");

// }

// createExcel();


// import { test, expect } from '@playwright/test';
// import ExcelJS from 'exceljs';

// test('Create Excel file', async () => {
//     const workbook = new ExcelJS.Workbook();

//     const worksheet = workbook.addWorksheet('Employees');

//     worksheet.columns = [
//         { header: 'ID', key: 'id', width: 10 },
//         { header: 'Name', key: 'name', width: 25 },
//         { header: 'Department', key: 'department', width: 20 }
//     ];

//     worksheet.addRow({ id: 101, name: 'Rahul', department: 'QA' });
//     worksheet.addRow({ id: 102, name: 'Priya', department: 'Automation' });
//     worksheet.addRow({ id: 103, name: 'Pooja', department: 'Automation' });

//     await workbook.xlsx.writeFile('EmployeeData.xlsx');

//     expect(true).toBe(true);
// });

//import ExcelJS from 'exceljs';

// async function readEmployees() {

//     const workbook = new ExcelJS.Workbook();

//     await workbook.xlsx.readFile("./EmployeeData.xlsx");

//     const worksheet = workbook.getWorksheet("Employees");

//     worksheet.eachRow((row, rowNumber) => {

//         console.log("Row:", rowNumber, row.values);

//     });

// }

// readEmployees();

import { test } from '@playwright/test';
import ExcelJS from 'exceljs';

test('Read Excel Data', async () => {

    const workbook = new ExcelJS.Workbook();

    await workbook.xlsx.readFile('./EmployeeData.xlsx');

    const worksheet = workbook.getWorksheet('Employees');

    worksheet.eachRow((row, rowNumber) => {

        console.log('Row:', rowNumber, row.values);

    });

});