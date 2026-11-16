// import ExcelJS from "exceljs";

// class ExcelUtil {

//     async getLoginData(filePath) {

//         const workbook = new ExcelJS.Workbook();
//         await workbook.xlsx.readFile(filePath);

//         const worksheet = workbook.getWorksheet("Login");

//         const users = [];

//         worksheet.eachRow((row, rowNumber) => {
//             if (rowNumber > 1) {
//                 users.push({
//                     username: row.getCell(1).value,
//                     password: row.getCell(2).value
//                 });
//             }
//         });

//         return users;
//     }
// }

// export default ExcelUtil;


export default class ExcelUtil {

    async getLoginData(filePath) {
        // Read Excel file
    }

}