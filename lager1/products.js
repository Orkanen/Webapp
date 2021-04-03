"use strict";

var products = (function () {
    function showProducts() {
        window.mainContainer.innerHTML = "";
        const apiKey = "79ec5a01a507b1090a62166a71ee2ea1";
        const baseUrl = "https://lager.emilfolino.se/v2";

        //let root = document.getElementById('root');

        let container = document.createElement("main");

        container.className = "container";

        let header = document.createElement("h1");

        header.textContent = "Products";

        fetch(`${baseUrl}/products?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.data.forEach(function(product) {
                    console.log(product);

                    let prodElement = document.createElement("p");

                    prodElement.textContent = product.name;

                    prodElement.addEventListener("click", function handleClick(event) {
                        console.log(event);
                        console.log(product.id);
                        findProduct.showProduct(product.id);
                    });

                    window.mainContainer.appendChild(prodElement);
                });
            });



        window.mainContainer.appendChild(header);
        window.rootElement.appendChild(window.mainContainer);
        menu.showMenu("products");
    }
    return {
        showProducts: showProducts
    };
})(products);
