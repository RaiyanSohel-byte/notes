const submitButton = document.getElementById("submit-button");
const input = document.getElementById("input");
const body = document.getElementById("body");
const noteDiv = document.getElementById("note-div");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const value = input.value;
  input.value = "";
  if (value) {
    const div1 = document.createElement("div");
    div1.className =
      "bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-xl p-[30px] text-black lg:w-[40%] mx-[30px] my-[20px] rounded-xl";
    const h3 = document.createElement("h3");
    h3.innerText = value;
    const trash = document.createElement("i");
    trash.className = "fa-solid fa-trash cursor-pointer";
    const pen = document.createElement("i");
    pen.className = "fa-solid fa-pen-to-square cursor-pointer";
    const div2 = document.createElement("div");
    div2.className = "flex gap-[15px] mb-[10px]";
    div2.appendChild(pen);
    div2.appendChild(trash);
    div1.appendChild(div2);
    div1.appendChild(h3);

    noteDiv.appendChild(div1);

    trash.addEventListener("click", () => {
      div1.remove();
    });
    pen.addEventListener("click", () => {
      h3.contentEditable = true;
      h3.focus();
      const newButton = document.createElement("button");
      newButton.innerText = "Submit";
      newButton.className = "btn btn-outline bg-black text-white mt-[10px]";
      div1.appendChild(newButton);

      newButton.addEventListener("click", () => {
        h3.contentEditable = false;
        newButton.remove();
      });
    });
  }
});
