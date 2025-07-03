/** Adding an event listener (event-handler) for the hide-image button*/
document.querySelector("#hide-image").addEventListener("click", () => {
    document.querySelector("#figure1").classList.add("hidden");

    // We will add the class relative to the parent of the figure element
    document.querySelector("#figure1").parentElement.classList.add("relative");
    // OR
    //document.querySelector("section:nth-of-type(2)").classList.add("relative");

    // Add the class absolute to the element with id figure1
    document.querySelector("#figure1").classList.add("absolute");
})

/** Adding an event listener (event-handler) for the show-image button*/
document.querySelector("#show-image").addEventListener("click", () => {
    document.querySelector("#figure1").classList.remove("hidden");

    // We will remove the class relative to the parent of the figure element
    document.querySelector("#figure1").parentElement.classList.remove("relative");
    // OR
    //document.querySelector("section:nth-of-type(2)").classList.remove("relative");

    // Remove the class absolute to the element with id figure1
    document.querySelector("#figure1").classList.remove("absolute");
})