const bill = document.querySelector(".input_row");
const btn = document.querySelector("#Add");
const print = document.querySelector("#print");

btn.addEventListener("click", e => {
  e.preventDefault();
  createRow(bill);
});
function createRow(btn) {
  let parent = document.createElement("div");
  parent.classList.add("fifth_column");
  parent.innerHTML = `<div class="package">
            <input type="number">
        </div>
        <div class="method">
            <input type="text">
        </div>
        <div class="contain">
            <input type="text">            
        </div>
        <div class="weight">
            <div class="check">
                <div class="actual">
            <input type="number">
                </div>
                <div class="charged">
            <input type="number">
                </div>
            </div>
        </div>`;
  btn.appendChild(parent);
}
print.addEventListener("click", e => {
  e.preventDefault();
  var myForm = document.getElementById("PRC");
  for (var i = 0; i < myForm.elements.length; i++) {
    console.log(myForm.elements[i].name);
    console.log(myForm.elements[i].value);
  }
  btn.classList.toggle("none");
});
