//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text){
    text = text.toLowerCase();
    let arr = text.split("");
    let cont = 0;

    let checked = [];

    arr.forEach(letter => {
        let filter = arr.filter(l => l == letter && !checked.includes(l));
        if (filter.length > 1) {
            cont++;
        }
        checked.push(letter)
    });


    return cont;
}