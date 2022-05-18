fetch("https://jsonplaceholder.typicode.com/photos/")
.then((resp)=>resp.json())
.then((data)=>{
    let container = document.querySelector(".container");
    let row = document.createElement("div");
    row.className = "row justify-content-between";
    data.forEach((datas) => {
        let card = document.createElement("div");
        let img = document.createElement("img")
        let card_body = document.createElement("div")
        let card_title = document.createElement("h5")
        let card_text = document.createElement("p")
        let link = document.createElement("a")

        card.className = "card";
        card.style.width = "18rem";
        img.className = "card-img-top";
        card_body.className = "card-body";
        card_title.className = "card-title";
        card_text.className = "card-text";
        link.className = "btn btn-primary";
        link.target = "_blank"

        img.src = `${datas.url}`
        card_title.innerText = datas.title;
        card_text.innerText = "Some quick example text to build on the card title and make up the bulk of the"
        link.href = `${datas.thumbnailUrl}`;

        card_body.appendChild(card_title);
        card_body.appendChild(card_text);
        card_body.appendChild(link);
        card.appendChild(img);
        card.appendChild(card_body);
        row.appendChild(card)
    });
    container.appendChild(row)
})