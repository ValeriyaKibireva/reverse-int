module.exports = function reverse(n) {
    const absoluteValue = Math.abs(n);
    const getArr = absoluteValue.toString().split('');
    let reverseArr = getArr.reverse();

    if (reverseArr[0] === 0) {
        reverseArr = reverseArr.shift();
    }

    return reverseArr.join('');
}

