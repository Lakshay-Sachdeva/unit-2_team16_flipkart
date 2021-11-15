//parent div, where everything has to be appended
let parent = document.querySelector('header') ;
//for all sub elements
let head = document.createElement('div');
head.style.background = '#2563EB' ;
head.style.position = 'fixed' ;
head.style.top = '0';
head.style.left = '0';
head.style.width = '100%' ;
head.style.height = '50px' ;
head.style.display = 'flex' ;

//search elements
let s_div = document.createElement('div') ;
s_div.style.display = 'flex';
//logo
let logo = document.createElement('img') ;
logo.src = 'images-lakshay/flipkart-head.jpg'
logo.style.height = '50px'
let a_tag = document.createElement('a') ;
a_tag.href = 'home.html' ;
a_tag.append(logo) ;
a_tag.style.marginLeft = '200px'
a_tag.style.marginRight = '10px'

//search bar
let search = document.createElement('div') ;
search.style.display = 'flex' ;
search.style.marginTop = '8px'
search.style.marginRight = '200px'

let query = document.createElement('input');
query.setAttribute = ('type' , 'text') ;
query.placeholder = 'Search for products, brands & more' ;
query.style.height = '26px' ;
query.style.width = '300px' ;
//search button
let search_button = document.createElement('button') ;
search_button.style.height  = '30px' ;
search_button.style.width  = '30px';
search_button.style.objectFit = 'cover' ;
search_button.style.border = 'white' ;
search_button.style.marginLeft = '-5px' ;
search_button.onclick = 'search_product()' ;
//button image
let button_image = document.createElement('img') ;
button_image.src = 'images-lakshay/images.png' ;
button_image.style.height = '25px'; 
button_image.style.width = '25px'; 
button_image.style.margin = '0px' ;
button_image.style.border = 'white' ;
button_image.style.marginLeft = '-5PX' ;


search_button.append(button_image) ;

search.append(query , search_button) ;

//RHS buttons

let b_div = document.createElement('div') ;
b_div.style.marginTop = '10px'

//login
let login_button = document.createElement('button') ;
login_button.textContent = 'Login' ;
login_button.style.background = 'white' ;
login_button.style.color = '#2563EB'
login_button.style.padding = '5px' ;
login_button.style.width = '100px';
login_button.style.border = 'white'
login_button.style.fontSize = '18px' ;
login_button.style.fontWeight = '600' ;

let login_redirect = document.createElement('a') ;
login_redirect.href = 'login.html' ;
login_redirect.append(login_button) ;
login_redirect.style.marginLeft = '250px'



//more

let more_button = document.createElement('button') ;
more_button.textContent = 'More' ;
more_button.style.fontSize = '18px' ;
more_button.style.fontWeight = '400' ;
more_button.style.background = '#2563EB' ;
more_button.style.border = '#2563EB'
more_button.style.color = 'white' ;
more_button.style.marginLeft = '25px'


//cart
let cart_button = document.createElement('button') ;
cart_button.textContent = 'Cart' ;
cart_button.style.fontSize = '18px' ;
cart_button.style.fontWeight = '600' ;
cart_button.style.background = '#2563EB' ;
cart_button.style.border = '#2563EB'
cart_button.style.color = 'white' ;
cart_button.style.marginLeft = '25px'

let a_cart = document.createElement('a') ;
a_cart.href = 'cart.html' ;
a_cart.append(cart_button)

b_div.append(login_redirect , more_button , a_cart) ; 
s_div.append(a_tag , search) ;
head.append(s_div , b_div) ;
parent.append(head) ;

search_product = function(){

}