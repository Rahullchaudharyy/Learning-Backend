import * as fs from 'fs/promises';  // Importing the 'promises' API from the 'fs' module to work with the filesystem asynchronously

// Creating a directory
try {
    // The 'recursive' option ensures that the directory and its parent directories are created if they don't exist.
    await fs.mkdir('E:\\BackendPath\\NewCourse\\nodejs', { recursive: true });
    console.log("Folder Created...");
} catch (error) {
    console.log("There is a problem creating the folder", error);
}

// Reading the contents of a directory
try {
    // 'readdir' reads the contents of a directory and returns an array of filenames.
    let files = await fs.readdir('E:\\BackendPath\\NewCourse\\nodejs');
    // Looping through the array of files and logging each one to the console.
    for (const file of files) {
        console.log(file);
    }
} catch (error) {
    console.log("There is a problem reading the folder", error);
}

// Removing a directory (it must be empty)
try {
    // 'rmdir' removes a directory. The directory must be empty for this to succeed.
    await fs.rmdir('E:\\BackendPath\\NewCourse');
    console.log("Folder deleted...");
} catch (error) {
    console.log("There is a problem deleting the folder", error);
}

// Creating a file
try {
    // 'writeFile' creates a new file or overwrites an existing file with the specified content.
    await fs.writeFile('Readme.md', "Hello, this is a README file created by Node.js and rc");
    console.log("File Created...");
} catch (error) {
    console.log("There is a problem creating the file", error);
}

// Reading a file
try {
    // 'readFile' reads the content of a file. The 'utf-8' encoding is used to read the file as a string.
    const data = await fs.readFile("Readme.md", "utf-8");
    console.log("Here is the data:", data);
} catch (error) {
    console.log("There is a problem reading the file", error);
}

// Copying a file
try {
    // 'copyFile' copies the content of one file to another file. If the destination file does not exist, it will be created.
    await fs.copyFile('Readme.md', "info.txt");
    console.log("File copied successfully...");
} catch (error) {
    console.log("There is a problem copying the file", error);
}

// Getting file information
try {
    // 'stat' retrieves information about the file, such as its size, creation time, and type.
    const info = await fs.stat("info.txt");
    // 'isDirectory()' checks if the path is a directory. 'isFile()' checks if the path is a file.
    console.log("Is it a directory? ", info.isDirectory());
    console.log("Is it a file? ", info.isFile());
} catch (error) {
    console.log("There is a problem getting file information", error);
}
