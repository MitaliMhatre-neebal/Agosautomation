// import XLSX from 'xlsx';

// export function getEmployeeData(filePath) {
//     const workbook = XLSX.readFile(filePath);
//     const sheetName = workbook.SheetNames[0];
//     const sheet = workbook.Sheets[sheetName];

//     return XLSX.utils.sheet_to_json(sheet);
// }

import XLSX from 'xlsx';

export function getLoginData() {

    const workbook = XLSX.readFile('./test-data/LoginData.xlsx');

    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const data = XLSX.utils.sheet_to_json(sheet, {
        defval: ""
    });

    console.log("Excel Data Loaded:");
    console.log(data);

    return data;
}