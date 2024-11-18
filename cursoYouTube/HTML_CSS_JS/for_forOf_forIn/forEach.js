const users = [
    { name: 'Robson', age: 33, contact: '(12) 93234-2342'},
    { name: 'Paulo', age: 40, contact: '(12) 97834-2342'},
    { name: 'Claudio', age: 28, contact: '(12) 93234-9872'},
    { name: 'John', age: 12, contact: '(12) 93817-2342'},
]

users.forEach( function(item, index, array){
    if(item.age <18){
        console.log(`O cliente ${item.name}, posição ${index} é menor de idade`)
    }
});