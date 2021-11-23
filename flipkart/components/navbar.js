function navbar(){
    return `
    <div id="search-components">
        <a href="home.html"><div id="logo">
            <img src="./images-lakshay/flipkart-head.jpg" />
        </div></a>
        <div id="search">
            <input type="text" placeholder="Search for Products, brands and more"  />
            <img src="https://img.icons8.com/ios/50/000000/search--v1.png" />
        </div>
    </div>
    <div id="user-info">
        <a href="login.html"><div>Log In</div></a>
        <div>More</div>
        <a href="cart.html"><div><img src="https://img.icons8.com/material/24/ffffff/fast-cart.png" />Cart</div></a>
    </div>`
}

export default navbar ;