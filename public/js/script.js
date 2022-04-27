let toogle = document.querySelector("#toogle");
let content = document.querySelector("#content");

let list = document.querySelectorAll(".tools_list");
let itemBox = document.querySelectorAll(".tools_box");

toogle.addEventListener("click", function () {
  content.classList.toggle('active')
});


for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }

    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.add("hide");

      if (itemBox[k].getAttribute("data-item") == dataFilter) {
        itemBox[k].classList.remove("hide");
        itemBox[k].classList.add("active");
      }
    }
  });
}
