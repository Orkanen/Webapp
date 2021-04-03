"use strict";
/* global menu findProduct */

var products = (function () {
    function showProducts() {
        window.mainContainer.innerHTML = "";
        const apiKey = "79ec5a01a507b1090a62166a71ee2ea1";
        const baseUrl = "https://lager.emilfolino.se/v2";

        //let root = document.getElementById('root');

        let container = document.createElement("main");

        container.className = "pContainer";

        let header = document.createElement("h1");

        header.textContent = "Products";
        header.className = "pTitle";

        fetch(`${baseUrl}/products?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.data.forEach(function(product) {
                    console.log(product);

                    let prodElement = document.createElement("p");

                    prodElement.textContent = product.name;
                    prodElement.className = "pItem";

                    prodElement.addEventListener("click", function handleClick(event) {
                        console.log(event);
                        console.log(product.id);
                        findProduct.showProduct(product.id);
                    });

                    container.appendChild(prodElement);
                });
            });


        window.mainContainer.appendChild(container);
        container.appendChild(header);

        window.rootElement.appendChild(window.mainContainer);
        menu.showMenu("products");
    }
    return {
        showProducts: showProducts
    };
})(products);
