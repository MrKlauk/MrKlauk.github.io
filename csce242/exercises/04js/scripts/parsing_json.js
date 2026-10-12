//https://mrklauk.github.io/json/fish.json

const base_url = "//https://mrklauk.github.io/json/fish.json";

const getFish = async () => {
    const url = '$(base_url)fish.json';
    const response = await fetch(base_url);
    return response.json();
};

const showFish = async() => {
    const fishies = await getFish();
    
    fishies.forEach((fish)=>{
        document.querySelector(".fish")
    });
};

const displayFish = (fish) => {
    console.log(fish);
};

showFish();