import { test } from '@playwright/test';
import * as XLSX from 'xlsx';
import * as path from 'path';

function readExcel(fileName: string) {
  const filePath = path.join(__dirname, '..', 'utils', fileName);

  const workbook = XLSX.readFile(filePath);

  workbook.SheetNames.forEach((sheetName) => {
    console.log(`\n===== ${fileName} - Sheet: ${sheetName} =====`);

    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet, {
      defval: '',
    });

    console.log(data);
  });
}

test('Read two Excel files and print contents', async () => {
  readExcel('employees.xlsx');
  readExcel('products.xlsx');
});

