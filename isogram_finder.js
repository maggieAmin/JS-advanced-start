const IsogramFinder = function (word) {
    this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
    wordToCheck = this.word
    const overAllCheckResult = wordToCheck.split('').every(letterIsUnique)
    function letterIsUnique(value, index, array) {
        // check if number of occurrences is equal to one
        checkResult = (wordToCheck.split(value).length - 1) == 1
        return checkResult
    }
    return overAllCheckResult

}

module.exports = IsogramFinder;
