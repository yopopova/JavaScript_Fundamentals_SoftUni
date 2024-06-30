function solve(text, number) {
    let trimmedText = text.substring(0, number);
    let placeToStop = 0;

    for (let i = trimmedText.length - 2; i >= 0; i--) {
        // Looking for the first empty space.
        // We write - 2 to get more points.

        if (trimmedText[i] === ' ') {
            placeToStop = i;
            break;
        }
    }

    let finalText = trimmedText.substring(0, placeToStop).padEnd(number, '.');
    console.log(finalText);
}

solve("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 20);
solve("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 100);