import * as fs from 'fs';
import { PuzzleTemplate } from './models/PuzzleTemplate';

const template: PuzzleTemplate = {
    files: [
        {
            name: 'puzzle.md',
            startingText: `## <puzzle_name>`
        },
        {
            name: 'solutions.ts',
            startingText: 'import { Solutions } from \'../models/Solutions\';\r\n\r\nfunction trivialSolution() {\r\n    \r\n}\r\n\r\nexport default {\r\n    trivialSolution\r\n} as Solutions;'
        },
        {
            name: '<puzzle_name>.spec.ts',
            startingText: `import solutions from './solutions';\r\n\r\ndescribe.each(Object.keys(solutions))('<puzzle_name>', (n) => {\r\n    it(\`\${n} add test description!\`, () => {\r\n        expect(solutions[n]()).toBeUndefined();\r\n    });\r\n});`
        }
    ]
};

function processTemplate(template: PuzzleTemplate, puzzleName: string) {
    const processedTemplate = new PuzzleTemplate();

    processedTemplate.files = template.files.map(file => {
        return {
            name: file.name?.replace('<puzzle_name>', puzzleName),
            startingText: file.startingText?.replace('<puzzle_name>', puzzleName)
        };
    });

    return processedTemplate;
}

function buildOut() {
    const puzzleName = process.argv[2];
    const processedTemplate = processTemplate(template, puzzleName);
    const puzzleDir = `${process.cwd()}/puzzles/${puzzleName}`;

    !fs.existsSync(puzzleDir) && fs.mkdirSync(puzzleDir);

    processedTemplate.files.forEach(file => {
        fs.writeFile(`${process.cwd()}/puzzles/${puzzleName}/${file.name}`, file.startingText, function(err) {
            if (err) {
                return console.error(`Template file ${file.name} could not be created, ${err}`);
            }
        });
    });
}

buildOut();