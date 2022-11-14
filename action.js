// find method in java script array

const items=[
    {id:1, items:"android mobile", cost:9000},
    {id:2, items:"iphone", cost:27000},
    {id:3, items:"window phone", cost:9500}
]

let affordable= items.find(( value)=>{
    return value.cost<10000
})

console.log("result",affordable);