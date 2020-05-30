/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    let keys = {};
    let result = [];

    for (let i = 0; i < items.length; i++) {
        let current, id, score;
        current = items[i];
        [id, score] = current;

        if (!keys[id]) keys[id] = [score];
        else keys[id].push(score);
    }

    for (let id in keys) {
        keys[id].sort((a, b) => b - a)
        keys[id] = keys[id].slice(0, 5);
        keys[id] = keys[id].reduce((a, b) => a + b, 0)
        keys[id] = Math.floor(keys[id] / 5);
        result.push([id, keys[id]])
    }

    return result;
};

