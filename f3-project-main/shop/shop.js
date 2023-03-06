// const product = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: { rate: 3.9, count: 120 },
// };

 /* colors */

let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let black = document.getElementById("black");
let white = document.getElementById("white");

/* sizes */
let s = document.getElementById("s");
let m = document.getElementById("m");
let l = document.getElementById("l");
let xl = document.getElementById("xl");

/* rating */
let Rating = document.getElementById("range"); 
let values = document.getElementById("values");
let zero = document.getElementById("r-0");
let one = document.getElementById("r-1");
let two = document.getElementById("r-2");
let three = document.getElementById("r-3");
let four = document.getElementById("r-4");
let five = document.getElementById("r-5");


/* price range */
let pr_one = document.getElementById("0-25");
let pr_two = document.getElementById("25-50");
let pr_three = document.getElementById("50-100");
let pr_four = document.getElementById("100on");

/* top filters */

let search_input = document.getElementById("search");
let all = document.getElementById("all");
let men = document.getElementById("men");
let women = document.getElementById("women");
let jewellery = document.getElementById("jewellery");
let electronics = document.getElementById("electronic");

let product_arr = [];

fetch(" https://fakestoreapi.com/products")
.then((response)=>response.json())
.then((data)=>{
    console.log("ShowData",data);
    product_arr.push(data);
    window.localStorage.setItem("product_arr",JSON.stringify(product_arr));
    console.log("product_arr",data);
})

all.addEventListener("click",all);
men.addEventListener("click",men);
women.addEventListener("click",women);
jewellery.addEventListener("click",jewellery);
electronics.addEventListener("click",electronics);

red.addEventListener("click",red);
blue.addEventListener("click",blue);
green.addEventListener("click",green);
black.addEventListener("click",black);
white.addEventListener("click",white);


s.addEventListener("click",s);
m.addEventListener("click",m);
l.addEventListener("click",l);
xl.addEventListener("click",xl);

zero.addEventListener("click",zero);
one.addEventListener("click",one);
two.addEventListener("click",two);
three.addEventListener("click",three);
four.addEventListener("click",four);
five.addEventListener("click",five);

pr_one.addEventListener("click",pr_one);
pr_two.addEventListener("click",pr_two);
pr_three.addEventListener("click",pr_three);
pr_four.addEventListener("click",pr_four);

let my_retrived_data = JSON.parse(window.localStorage.getItem("product_arr"));
console.log(my_retrived_data);





