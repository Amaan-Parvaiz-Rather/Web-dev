import data from "./data.js"

function filterByCategories(item,category){
    return item.filter(item => item.category === category)
}

console.log(filterByCategories(data,"Electronics"))

function sortByPrice(items,order = 'asc'){
    return [...items].sort((a,b)=>{
        const {price : priceA} = a
        const {price : priceB} = b

        return order==='asc' ? priceA - priceB : priceB - priceA
        })
}

console.log(sortByPrice(data,"asc"))

function averagePrice(items){
    const total = items.reduce((sum,item)=> sum + item.price, 0)
    return total/items.length
}

console.log(averagePrice(data))

function groupByCategories(items){
    return items.reduce((groups,item)=>{
        const {category} = item
        if(!groups[category]){
            groups[category]=[];
        }
        groups[category].push(item);
        return groups;
    },{});
}

console.log(groupByCategories(data))

function fetchproducts(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(data);
        },1000);
    });
}

async function main(){
    console.log("Fetching Products");
    const data = await fetchproducts();
    console.log("Got Data", data);

    console.log("Electronics:", filterByCategories(data,"Electronics"));
    console.log("Sorted by price (asc):", sortByPrice(data,"asc"));
    console.log("Average price",averagePrice(data));
    console.log("Grouped by category:",groupByCategories(data));
}

main()