const myForm = document.getElementById("PRC");
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
function createRow(dom, i) {
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
  dom.appendChild(parent);
}
let DataSend = false;
const print = (dom, text) => {
  dom.addEventListener("click", e => {
    e.preventDefault();
    copy.innerHTML = "";
    copy.innerHTML = `
        <h2 class="copy">${text}</h2>
  `;
    const formData = data();
    if (!DataSend) {
      DataSend = true;
      console.log(DataSend);
      fetch("http://127.0.0.1:3000/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => {
          return response.json;
        })
        .then(json => {
          console.log(json);
        })
        .catch(err => console.log(err));
    }
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
function data() {
  const formData = {};
  let name, value;
  for (let i = 0; i < myForm.elements.length - 5; i++) {
    if (i === 7 || i === 8 || i === 50 || i === 51) {
      if (myForm.elements[i].checked) {
        value = "yes";
      } else {
        value = "no";
      }
    } else {
      value = myForm.elements[i].value;
    }
    name = myForm.elements[i].name;
    formData[name] = value;
  }
  return formData;
}
const reset = document.querySelector("#reset");
reset.addEventListener("click", e => {
  e.preventDefault();
  for (let i = 0; i < myForm.elements.length - 5; i++) {
    myForm.elements[i].value = "";
  }
});
const download = document.querySelector("#download");
