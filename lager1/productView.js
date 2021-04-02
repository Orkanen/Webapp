"use strict";

var find_product = (function () {
    function showProduct(products_id) {
            window.mainContainer.innerHTML = "";
            const api_key = "79ec5a01a507b1090a62166a71ee2ea1";
            const base_url = "https://lager.emilfolino.se/v2";
            const product_id = products_id;

            let root = document.getElementById('root');

            let container = document.createElement("main");
            container.className = "container";

            let header = document.createElement("h1");
            header.textContent = "Produkt";

            let prodElement = document.createElement("p");

            fetch(`${base_url}/products/${product_id}?api_key=${api_key}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    console.log(data.data);
                    for (const [key, value] of Object.entries(data.data)) {
                        if (key == "specifiers"){
                            prodElement.innerText += (`${key}:`);
                            let test = JSON.parse(value);
                            let temp = "";

                            for (const [cey, galue] of Object.entries(test)) {
                                temp += (` ${cey}: ${galue},`);
                            }
                            let editedTemp = temp.slice(0, -1);
                            prodElement.innerText += editedTemp + "\n";
                        } else {
                            prodElement.innerText += (`${key}: ${value}`) + "\n";
                            //prodElement.innerText += (`${value}`) + "\n";
                        }
                    }
                });
            window.mainContainer.appendChild(header);
            window.mainContainer.appendChild(prodElement);
            window.rootElement.appendChild(window.mainContainer);
            menu.showMenu("find_product");
    };

    return {
        showProduct: showProduct
    };
})(find_product);
