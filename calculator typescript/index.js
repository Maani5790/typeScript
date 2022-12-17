function getTotal(num) {
    return num.reduce(function (acc, item) {
        return acc + item;
    }, 0);
}
console.log(getTotal([1, 2, 3, 4]));
