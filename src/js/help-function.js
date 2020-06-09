import colors from './colors.json'

export const debounce = function (func, wait, immediate) {
    let timeout;

    return function executedFunction() {
        const context = this;
        const args = arguments;

        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
};

export const getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export const getRandomColor = function () {
    let random = getRandomInt(0, 148)
    return colors[random].color
}