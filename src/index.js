module.exports = function toReadable (number) {
    const firstNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const secondNumber = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';
    number = String(number);

    if (number < 20) {
        result += firstNumber[number];
    } else if (number >= 20 && number < 100) {
        if (number[1] === '0') {
            result += secondNumber[(number[0]) - 2];
        } else {
            result += secondNumber[(number[0]) - 2] + ' ' + firstNumber[(number[1])];
        };
    } else if (number >= 100 && number < 1000) {
        if (number.slice(1) < 20) {

            if (number[1] === '0' && number[2] === '0') {
                result += firstNumber[(number[0])] + ' hundred';
            } else if (number[1] === '0') {
                result += firstNumber[(number[0])] + ' hundred ' + firstNumber[(number[2])];
            } else {
                result += firstNumber[(number[0])] + ' hundred ' + firstNumber[number.slice(1)];
            };

        } else if (number[2] === '0') {
            result += firstNumber[(number[0])] + ' hundred ' + secondNumber[(number[1]) - 2];
        } else {
            result += firstNumber[(number[0])] + ' hundred ' + secondNumber[(number[1]) - 2] + ' ' + firstNumber[(number[2])];
        };
    };

    return result;
};
