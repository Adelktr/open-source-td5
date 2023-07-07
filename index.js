const fs = require("fs");
const csv = require("csv-parser");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

function generateRandomGrade(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addRandomGradesToCSV(csvFilePath, minGrade, maxGrade, outputFilePath) {
  return new Promise((resolve, reject) => {
    if (
      !csvFilePath ||
      typeof minGrade !== "number" ||
      typeof maxGrade !== "number" ||
      !outputFilePath
    ) {
      reject(new Error("Invalid parameters"));
    }

    const updatedRows = [];

    fs.createReadStream(csvFilePath)
      .pipe(csv({ separator: ";" }))
      .on("data", (row) => {
        const randomGrade = generateRandomGrade(minGrade, maxGrade);

        row.Note = randomGrade.toString();
        updatedRows.push(row);
      })
      .on("end", () => {
        const totalNotes = updatedRows.reduce(
          (sum, row) => sum + parseInt(row.Note || 0),
          0
        );
        const averageGrade = (totalNotes / updatedRows.length).toFixed(2);

        const averageRow = {
          Student_pk: "Moyenne",
          Note: averageGrade,
        };
        updatedRows.push(averageRow);

        const csvWriter = createCsvWriter({
          path: outputFilePath,
          header: Object.keys(updatedRows[0]).map((column) => ({
            id: column,
            title: column,
          })),
        });

        csvWriter
          .writeRecords(updatedRows)
          .then(() => {
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

module.exports = {
  addRandomGradesToCSV,
};
