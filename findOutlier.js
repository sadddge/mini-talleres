//https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers){
    let even = integers.filter(x => x%2 == 0);
    let odd = integers.filter(x => x%2 != 0);
    return even.length == 1 ? even[0] : odd[0];
}