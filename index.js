const names=["Charlie", "Samip", "Ali"]
let messages=[];
// function writeCards(names, event="birthday"){
    
//     for(let i=0; i<names.length; i++){

// const message=`Thank you, ${names[i]} for the wonderful ${event} gift.`
// messages.push(message)
//     }
// return messages;
// }
// writeCards(names);
// console.log(messages);

let i=0
function writeCards(names, event="birthday"){
while(i<names.length){
    const message=`Thank you, ${names[i]} for the wonderful ${event} gift.`
    i++;
messages.push(message)}
return messages;
}
writeCards(names, "Christmas");
console.log(messages);
