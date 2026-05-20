function sendform(event){
    event.preventDefault();

    document.getElementById("output").innerText =
    "Data has been successfully submitted";

    event.target.reset();
}