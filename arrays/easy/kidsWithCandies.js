/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies);

    for (let i = 0; i < candies.length; i++) {
        candies[i] = candies[i] + extraCandies >= maxCandies ? true : false
    }

    return candies;
};

/*
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true]
*/

/*
Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids.

Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.

Kid 3 has 5 candies and this is already the greatest number of candies among the kids.

Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies.

Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
*/
