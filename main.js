var summa = 0;
for(var i = 1; i <= 100; i++){
    if (i % 2===0 && i % 3===0) {
        summa += i;
    }
}
console.log(summa);

