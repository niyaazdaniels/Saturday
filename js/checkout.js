// searching for items that we purchased

//create array
let purchased = JSON.parse(localStorage.getItem("purchased"))

let table = document.querySelector('table')
table.innerHTML = purchased.map((item,index) =>{
    return `

<tr>
<td>${index+1}</td>
<td>${item.name}</td>
<td>${item.description}</td>
<td>R${item.price}</td>
<td>${item.quantity}</td>
<td><img src = "${item.url}"</td>
</tr>
    `
})

//can use reduce and map for total pricing, to reduce the numbers to a single value
// map returns an array, of prices and use reduce to total the value of the array