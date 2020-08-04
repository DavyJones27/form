const bill = document.querySelector(".input_row");
const btn = document.querySelector("#Add");
const office = document.querySelector("#OFFICECOPY");
const driver = document.querySelector("#DRIVERCOPY");
const consignee = document.querySelector("#CONSIGNEECOPY");
const consignor = document.querySelector("#CONSIGNORCOPY");
const copy = document.querySelector("#copy");
const copyArray = [
  "CONSIGNEE COPY",
  "CONSIGNOR COPY",
  "DRIVER COPY",
  "OFFICE COPY"
];
let inputnumber = 6;
btn.addEventListener("click", e => {
  e.preventDefault();
  createRow(bill, inputnumber);
  inputnumber++;
});
function createRow(btn, i) {
  let parent = document.createElement("div");
  parent.classList.add("fifth_column");
  parent.innerHTML = `<div class="package">
            <input type="number" class='package' name="package-${i}">
        </div>
        <div class="method">
            <input type="text" class="method" name="method-${i}">
        </div>
        <div class="contain">
            <input type="text" name="contain-${i}">
        </div>
        <div class="weight">
            <div class="check">
                <div class="actual">
                    <input type="number" name='actual-${i}'>
                </div>
                <div class="charged">
                    <input type="number" name='charge-${i}'>
                </div>
            </div>
        </div>`;
  btn.appendChild(parent);
}
const print = (dom, text) => {
  dom.addEventListener("click", e => {
    e.preventDefault();
    copy.innerHTML = "";
    copy.innerHTML = `
        <h2 class="copy">${text}</h2>
  `;
    setTimeout(() => {
      page();
    }, 1000);
  });
};
const page = () => {
  printJS({
    printable: "container",
    type: "html",
    header: "",
    css: "./main.css"
  });
};
print(consignee, copyArray[0]);
print(consignor, copyArray[1]);
print(driver, copyArray[2]);
print(office, copyArray[3]);
const myForm = document.getElementById("PRC");
for (let i = 0; i < myForm.elements.length; i++) {
  console.table(myForm.elements[i].name);
}
