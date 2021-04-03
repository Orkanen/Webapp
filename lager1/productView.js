"use strict";

var findProduct = (function () {
    function showProduct(productsId) {
        window.mainContainer.innerHTML = "";
        const apiKey = "79ec5a01a507b1090a62166a71ee2ea1";
        const baseUrl = "https://lager.emilfolino.se/v2";
        const productId = productsId;

        //let root = document.getElementById('root');

        let container = document.createElement("main");

        container.className = "container";

        let header = document.createElement("h1");

        header.textContent = "Product";

        let prodElement = document.createElement("p");

        fetch(`${baseUrl}/products/${productId}?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(data.data);
                for (const [key, value] of Object.entries(data.data)) {
                    if (key == "specifiers") {
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
        menu.showMenu("findProduct");
    }

    return {
        showProduct: showProduct
    };
})(findProduct);
