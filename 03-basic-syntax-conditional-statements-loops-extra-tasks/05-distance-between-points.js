function distanceBetweenPoints(x1, y1, x2, y2) {
    // We use the Pythagorean theorem: a2 + b2 = c2.
    let a = Math.abs(x1 - x2); // Find the length of one leg.
    let b = Math.abs(y1 - y2); // Find the length of the other leg.

    let hypotenuse = Math.sqrt((a * a) + (b * b)); // We find the hypotenuse ie the distance between the two points/two legs.
    console.log(hypotenuse);
}

distanceBetweenPoints(2, 4, 5, 0);
// distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);