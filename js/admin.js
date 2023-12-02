// multiple objects required for products
// make use of constrcutor function to create 

// name description price and image URL
// additional information can be added to products


// this is where all products will be stored

let items = [];

// object created manually
// dont do this way - must use a constructor function to make the function
let object1 = {
    id: 1,
    name: "Air",
    description: "Legend",
    price: 1500 ,
    quantity: 1,
    url:"https://static.nike.com/a/images/t_default/9b26aa8f-0173-409b-b30a-7ce2d88573a4/custom-nike-dunk-low-by-you.png"
}
// in order to create objects we will need a constructor function

// constructor function that will create objects

// items will be pushed into the array
// function to create objects
function ConstructorBro (id, name, description, price, quantity,url) {
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.quantity = quantity,
    this.url = url
}
// second item created using constructor 
let item2 = new ConstructorBro(2, "Nike"," The OG", 800, 1,"https://static.nike.com/a/images/t_default/q3tx0zbjfdhuayuuqtj4/ebernon-low-shoe-04dgFq.png")
let item3 = new ConstructorBro(2, "Addidas","Sprint", 450, 1,"https://assets.adidas.com/images/w_450,f_auto,q_auto/591e26e916234fe3822194061f90c9a4_9366/IF8068_00_plp_standard.jpg")
let item4 = new ConstructorBro(2, "Puma"," Louws", 1500, 1,"https://www.google.com/url?sa=i&url=https%3A%2F%2Fchakhdi.in%2Fbrand%2Fpuma-2%2Fcategory%2Fmen-sport-shoe-110%3Fbrands%3DPUMA-2%26price_max%3D12999.0&psig=AOvVaw2g6x-JZ80-6vs1zHw9W_Ie&ust=1701607121682000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLi39NHi8IIDFQAAAAAdAAAAABAN")
// to push item2 into array called items 
items.push(object1,item2)
items.push(object1,item3)
items.push(object1,item4)
// saves items into the browser from the array into local storage

localStorage.setItem("items",JSON.stringify(items))
// this items is the array, once we store the data, we get the data and that data is stored into the array, so it will be received directly from the browser
// set items into browser, get items from browser and stores into array
// converts saved data in the local storage to an object
items = JSON.parse(localStorage.getItem("items"))

// linking
// query selector to display information

let table = document.querySelector('table')
// 2 parameters items and index because the array is called items
// map takes 2 parameters loops through objects
// index will return the index of the object
// map creates a new array
    // add
// console.log(items);
// console.log(index);
// creating the tag we want to insert
// because information is going inside a table
function niyaaz(){
let products = items.map(function(item, index){
    return `

    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Description</th>
    <th>Price</th>
    <th>Image</th>
    </tr>
        <tr>
            <td> ${item.id}: </td>
            <td> ${item.name} </td>
            <td> ${item.description} </td>
            <td> R${item.price} </td>
            <td> ${item.quantity} </td>
            <td> <img src ="${item.url}"</td>
            <td><button>Edit</button></td>
            <td><button class ="delete" value ="${index}">Delete</button></td>
        </tr> `
});
// add to cart button will have a certain index
// push that item to new array and stores in local storage and previewed in checkout 

// create a function that when the button is clicked it does something to item
//function to remove data
function remove(position){
    items.splice(position,1)
    favourite()
    niyaaz()
}
let dltBtn = document.querySelector('.delete')
// to the parent tag where everything is written to which is table
// adding event listerner to table parent tag
// can only appear in certain tags
table.addEventListener('click', function(){
    // will affect all the children tags of the parent tag
    if (event.target.classList.contains('delete')){
        remove(event.target.value)
        // alert(event.target.value)
        // returns the index in an alert
    }
})
//writing products to the table in HTML page
//  instead of using this.id we can make use to  index+1 to add
// we use .join() to remove the comment
table.innerHTML = products.join('')
}niyaaz()
//nested function
//nested
function favourite() {
    localStorage.setItem("items",JSON.stringify(items))
    items = JSON.parse(localStorage.getItem("items"))
}
// we need a spinner
// make use of bootstrap spinner
// use js to hide it
// if data doesn't run the spinner must display

// to style table
table.style.backgroundColor = 'cornflowerblue'
table.style.color = 'white'
table.style.textAlign = 'center'

// conditional statement 
// else = table.style.display = 'none' - hides spinner when data is shown

// if we call a function as a parameter within another function is called a callback function