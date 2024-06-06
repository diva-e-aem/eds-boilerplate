import { buildDocumentation, documentationToMarkdown } from 'tsdoc-markdown';
import * as fs from 'fs';
import path from 'node:path';

// Source directories
const docsDirectories = ['src/helpers/sidekick', 'src/directives', 'src/utils'];

// Output file
const outputFile = 'documentation.md';

// If the output file already exists, clear its content
if (fs.existsSync(outputFile)) {
  fs.writeFileSync(outputFile, '# Documentation\n');
}

docsDirectories.forEach((docsDirectory) => {
  // Read all files from the source directory
  fs.readdir(docsDirectory, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    // Create an array to hold the content of each directory
    const directoryContents: string[] = [];

    // Get the title of the directory
    const directoryTitle = path.dirname(docsDirectory) + '/' + path.basename(docsDirectory);

    // Create an array to hold the paths of the files
    const filePaths: string[] = [];

    files.forEach((file) => {
      const filePath = path.join(docsDirectory, file);
      filePaths.push(filePath);
    });

    // Build documentation for every file in the directory
    const directoryDocumentation = buildDocumentation({ inputFiles: filePaths, options: { types: true } });

    // Generate the markdown for every file in the directory
    let directoryMarkdown = documentationToMarkdown({ entries: directoryDocumentation, options: { emoji: undefined } });

    // Add the wrapped markup to the array
    directoryContents.push(`<details><summary>${directoryTitle}</summary>\n\n${directoryMarkdown}\n\n</details>\n\n`);

    // Write the combined content to the output file
    fs.writeFileSync(outputFile, directoryContents.join(''), { flag: 'a' });
  });
});
