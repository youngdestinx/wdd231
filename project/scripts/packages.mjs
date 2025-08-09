function displayPack() {
    const packages = document.getElementById("package");
    const silver = document.querySelector(".silver");
    const bronze = document.querySelector(".bronze");
    const gold = document.querySelector(".gold");

    silver.addEventListener("click", ()=> {
        packages.value = "Basic Plan";
    });

    bronze.addEventListener("click", ()=> {
        packages.value = "Starter Plan";
    });

    gold.addEventListener("click", ()=> {
        packages.value = "Premium Plan";
    });
}

export default displayPack;