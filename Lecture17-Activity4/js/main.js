/** Adding an event listener (event-handler) for the toggle-image button*/
document.querySelector("#toggle-image").addEventListener("click", () => {
    document.querySelector("#figure1").classList.toggle("hidden");

    // We will toggle the class relative on the parent of the figure element
    document.querySelector("#figure1").parentElement.classList.toggle("relative");
    // OR
    //document.querySelector("section:nth-of-type(2)").classList.add("relative");

    // toggle the class absolute on the element with id figure1
    document.querySelector("#figure1").classList.toggle("absolute");
})
