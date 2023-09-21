function writeCards(array, event) {
    const messages = [];        
    for(let i=0; i < array.length; i++) {
            const newArray = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
            messages.push(newArray);       
        }
    
    return messages;
}
function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}