function getData(url, method = "GET", body) {
    return fetch(url, {
        method, // method: method
        headers: {
            "Content-Type": "application/json",
        },
        ...(body ? { body: JSON.stringify(body) } : {}),
    })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            return response;
        });
}

async function getProducts() {
    const rltd = await getData("https://dummyjson.com/products");
    return rltd.products;
}

function drawProducts() {
    getProducts().then((response) => {
        const rltd = response.map((rld) => {
            

            return ` <div class="container-rlt">
            <div class="imgrlt">
                <img src="${rld.thumbnail}" alt="">
            </div>
            <div>
                <span style="margin: auto;">${rld.category}</span>
            </div>
            <div>
                <p style="margin: auto;">${rld.title}</p>
            </div>
            <div>
                <span  style="margin: auto;">${rld.price}</span>
                <span  style="margin: auto;">${(rld.price)-(rld.price/rld.discountPercentage)}</span>
            </div>
            <div>
                <button class="btn-add-cart"  style="margin: auto;">SELECT OPTİONS</button>
            </div>
        </div>`;
        });
        document.getElementById("rltd").innerHTML = rltd.join("");
    });
}
drawProducts();