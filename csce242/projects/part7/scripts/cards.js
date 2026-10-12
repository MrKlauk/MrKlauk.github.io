//https://MrKlauk.github.io/csce242/projects/part7/data.json
const base_url = "https://MrKlauk.github.io/csce242/projects/part7/";

const getData = async () => {
    const url = `${base_url}data.json`;
    const response = await fetch(url);
    return response.json();
};

const showCards = async () => {
    const cardGrid = document.getElementById("card-grid");

    if (!cardGrid) {
        return;
    }

    const category = cardGrid.dataset.category;
    const items = await getData();

    items.forEach((item) => {
        if (item.category === category) {
            cardGrid.append(displayCard(item));
        }
    });
};

//creates a card for one item from the json
const displayCard = (item) => {
    const card = document.createElement("a");
    card.classList.add("card");
    card.href = "#";

    const img = document.createElement("img");
    img.src = `${base_url}images/${item.img_name}`;
    img.alt = item.title;
    card.append(img);

    const body = document.createElement("div");
    body.classList.add("card-body");
    card.append(body);

    const head = document.createElement("div");
    head.classList.add("card-head");
    body.append(head);

    const h3 = document.createElement("h3");
    h3.innerHTML = item.title;
    head.append(h3);

    head.append(createTag(item.tag1));

    body.append(createTag(item.tag2));

    const p = document.createElement("p");
    p.innerHTML = item.description;
    body.append(p);

    //shops and spots show their address at the bottom of the card
    if (item.category !== "trick") {
        const address = document.createElement("span");
        address.classList.add("address");
        address.innerHTML = `\uD83D\uDCCD ${item.location || item.address}`;
        body.append(address);
    }

    if (item.category === "shop") {
        const hours = document.createElement("span");
        hours.classList.add("address");
        hours.innerHTML = `\uD83D\uDD50 ${item.hours}`;
        body.append(hours);
    }

    card.onclick = (e) => {
        e.preventDefault();
        openModal(item);
    };

    return card;
};

const createTag = (label) => {
    const span = document.createElement("span");
    span.classList.add("tag");
    span.innerHTML = label;
    return span;
};

//fills the modal with the selected item's info
const openModal = (item) => {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");

    if (!modal || !modalBody) {
        return;
    }

    modalBody.innerHTML = "";

    const hero = document.createElement("section");
    hero.classList.add("modal-hero");
    hero.style.backgroundImage = `url('${base_url}images/${item.img_name}')`;

    const tags = document.createElement("div");
    tags.classList.add("hero-tags");
    tags.append(createTag(item.tag1));
    tags.append(createTag(item.tag2));
    hero.append(tags);

    const h2 = document.createElement("h2");
    h2.classList.add("modal-title");
    h2.innerHTML = item.title;
    hero.append(h2);
    modalBody.append(hero);

    const body = document.createElement("section");
    body.classList.add("modal-body");
    modalBody.append(body);

    if (item.category === "spot") {
        body.append(displayRating(item.rating));
    }

    const p = document.createElement("p");
    p.classList.add("modal-description");
    p.innerHTML = item.description;
    body.append(p);

    const extras = document.createElement("div");
    extras.classList.add("modal-extras");
    body.append(extras);

    //each category has different extra info
    if (item.category === "spot") {
        extras.append(displayListCard("Local Tips", item.tips, "ol"));
        extras.append(displayInfoCard("Location", item.location));
    } else if (item.category === "shop") {
        extras.append(displayShopInfoCard(item));
        extras.append(displayShopBrandsCard(item));
    } else {
        extras.append(displayTagCard("Prerequisites", item.prerequisites));
        extras.append(displayListCard("Common Mistakes", item.mistakes, "ul", "mistakes-list"));
        body.append(displayListCard("How To Do It", item.steps, "ol", "detail-steps"));
    }

    modal.classList.add("open");
};

const displayRating = (rating) => {
    const div = document.createElement("div");
    div.classList.add("modal-rating");

    let stars = "";
    for (let i = 0; i < 5; i++) {
        stars += i < rating
            ? "\u2605"
            : `<span style="color:var(--filter-line)">\u2605</span>`;
    }

    const starSpan = document.createElement("span");
    starSpan.classList.add("stars");
    starSpan.innerHTML = stars;
    div.append(starSpan);

    const label = document.createElement("span");
    label.innerHTML = `${rating} / 5 local rating`;
    div.append(label);

    return div;
};

const displayInfoCard = (title, value) => {
    const card = document.createElement("div");
    card.classList.add("extras-card");

    const h3 = document.createElement("h3");
    h3.innerHTML = title;
    card.append(h3);

    const p = document.createElement("p");
    p.innerHTML = value;
    card.append(p);

    return card;
};

//takes a list of strings and builds an ol/ul inside a card
const displayListCard = (title, list, listType, extraClass) => {
    const card = document.createElement("div");
    card.classList.add("extras-card");
    if (extraClass) {
        card.id = extraClass;
    }

    const h3 = document.createElement("h3");
    h3.innerHTML = title;
    card.append(h3);

    const ul = document.createElement(listType);
    if (extraClass === "mistakes-list") {
        ul.classList.add("mistakes-list");
    }
    list.forEach((line) => {
        const li = document.createElement("li");
        li.innerHTML = line;
        ul.append(li);
    });
    card.append(ul);

    return card;
};

const displayTagCard = (title, tags) => {
    const card = document.createElement("div");
    card.classList.add("extras-card");

    const h3 = document.createElement("h3");
    h3.innerHTML = title;
    card.append(h3);

    const tagWrap = document.createElement("div");
    tagWrap.classList.add("extras-tags");
    tags.forEach((tag) => {
        const span = document.createElement("span");
        span.classList.add("tag");
        span.innerHTML = tag;
        tagWrap.append(span);
    });
    card.append(tagWrap);

    return card;
};

const displayShopInfoCard = (item) => {
    const card = document.createElement("div");
    card.classList.add("extras-card");

    const h3 = document.createElement("h3");
    h3.innerHTML = "Info";
    card.append(h3);

    const address = document.createElement("p");
    address.innerHTML = `<strong>Address</strong>\uD83D\uDCCD ${item.address}`;
    card.append(address);

    const hours = document.createElement("p");
    hours.innerHTML = `<strong>Hours</strong>\uD83D\uDD50 ${item.hours}`;
    card.append(hours);

    return card;
};

const displayShopBrandsCard = (item) => {
    const card = document.createElement("div");
    card.classList.add("extras-card");

    const h3b = document.createElement("h3");
    h3b.innerHTML = "Brands Carried";
    card.append(h3b);

    const brands = document.createElement("div");
    brands.classList.add("extras-tags");
    item.brands.forEach((brand) => {
        const span = document.createElement("span");
        span.classList.add("tag");
        span.innerHTML = brand;
        brands.append(span);
    });
    card.append(brands);

    const h3s = document.createElement("h3");
    h3s.innerHTML = "Services";
    card.append(h3s);

    const services = document.createElement("div");
    services.classList.add("extras-tags");
    item.services.forEach((service) => {
        const span = document.createElement("span");
        span.classList.add("tag");
        span.innerHTML = service;
        services.append(span);
    });
    card.append(services);

    return card;
};

//close the modal by clicking the X, the backdrop, or pressing Escape
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");

if (modal && modalClose) {
    modalClose.onclick = () => modal.classList.remove("open");

    modal.onclick = (e) => {
        if (e.target === modal) modal.classList.remove("open");
    };

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") modal.classList.remove("open");
    });
}

showCards();