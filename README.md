# adelktr-random-grades

adelktr-random-grades is a JavaScript library that allows you to add random grades to a CSV file. It reads a CSV file containing student information, adds a random grade for each student, and writes the updated information to a new CSV file (or the existing one).

## Installation 🚀

Use npm to install the library:

```shell
npm install adelktr-random-grades
```

## Usage ⚙️

```javascript
const { addRandomGradesToCSV } = require("adelktr-random-grades");

const csvFilePath = "path/to/input/file.csv";
const minGrade = 10;
const maxGrade = 20;
const outputFilePath = "path/to/output/file.csv";

addRandomGradesToCSV(csvFilePath, minGrade, maxGrade, outputFilePath)
  .then(() => {
    console.log("CSV file updated with random grades.");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
```

<br>

**The addRandomGradesToCSV function takes the following parameters:**

**csvFilePath**: The path to the input CSV file.

**minGrade**: The minimum grade value.

**maxGrade**: The maximum grade value.

**outputFilePath**: The path to the output CSV file.

The function reads the input CSV file, generates random grades for each student, adds a new column with the grades, and writes the updated information to the output CSV file.

Make sure to replace the placeholder paths with the actual file paths on your system.

<br>

## Example CSV File Format 👨‍🏫

The library expects the CSV file to have the following format:

```wasm
Student_pk;Nom;Prenom;Commentaire;Note
12312321312;DOE;John;;
12312321313;DOE;Maria;;
12312321314;DOE;Jane;;
12312321315;DOE;Jack;;
12312321316;DOE;Mariasse;;
```

| Student_pk  | Nom |  Prenom  | Commentaire | Note |
| :---------- | :-: | :------: | :---------: | ---: |
| 12312321312 | DOE |   John   |
| 12312321313 | DOE |  Maria   |
| 12312321314 | DOE |   Jane   |
| 12312321315 | DOE |   Jack   |
| 12312321316 | DOE | Mariasse |

Each row represents a student.
The Note column is empty and will be filled with random grades by the library.
The other columns (Student_pk, Nom, Prenom, Commentaire) remain unchanged.

The returned file should look like this:

```wasm
Student_pk,Nom,Prenom,Commentaire,Note
12312321312,DOE,John,,16
12312321313,DOE,Maria,,10
12312321314,DOE,Jane,,13
12312321315,DOE,John 2,,17
12312321316,DOE,Mariasse,,13
Moyenne,,,,13.80

```

| Student_pk  | Nom |  Prenom  | Commentaire |  Note |
| :---------- | :-: | :------: | :---------: | ----: |
| 12312321312 | DOE |   John   |             |    16 |
| 12312321313 | DOE |  Maria   |             |    10 |
| 12312321314 | DOE |   Jane   |             |    13 |
| 12312321315 | DOE |   Jack   |             |    17 |
| 12312321316 | DOE | Mariasse |             |    13 |
| Moyenne     |     |          |             | 13.80 |

<br>

## License 🚨

This project is licensed under the **MIT License**. See the LICENSE file for details.
