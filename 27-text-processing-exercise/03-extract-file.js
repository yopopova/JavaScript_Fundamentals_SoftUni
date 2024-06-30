function extractFile(text) {
    let index = text.lastIndexOf('\\'); // Here we write '\\' because with '\' it is not visualized.
    // ^ Get the index of the last slash.

    let fileName = text.substring(index + 1).split('.'); // Cut the last part of the string.

    let extension = fileName.pop(); // To always take the last element ie. the file extension.
    let template = fileName.join('.');

    console.log(`File name: ${template}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');