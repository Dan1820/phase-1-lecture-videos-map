let books=[
    {
        title:'intro to js',
        price: 26,
        inventory :0
    },
    {
        title:'intro to c#',
        price: 100,
        inventory :10
    },
    {
        title:'intro to php',
        price: 40,
        inventory :2
    },
    {
        title:'intro to java',
        price: 50,
        inventory :30
    }
]
// function loopAndUpdate(array, updaterFoo){
//     const updateArray=[]
//     for(item of array){
//         updateArray.push[updaterFoo(item)]
//     }
//     return updateArray;
// }
// console.log(loopAndUpdate(books))


const title=books.map(item=>item.title)
// function priceFoo(item){
//     return item.price
// }
const prices =books.map(item=> item.price)
const inventory=books.map(item=>item.inventory)


const halfOff=books.map(item=>{
    let itemCopy=Object.assign({},item)
    itemCopy.price=Math.floor(itemCopy.price/2)
    return itemCopy
})
// console.log(loopAndUpdate(books, haldOff))
console.log(prices)
console.log(halfOff)

