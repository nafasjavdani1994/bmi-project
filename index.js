let gender = "male",
  height = 50,
  weight = 10;

document.querySelector(".calculate .gender .male").onclick = function () {
  gender = "male";
  this.classList.add("active");
  document.querySelector(".calculate .gender .female").className = "female";
};

document.querySelector(".calculate .gender .female").onclick = function () {
  gender = "female";
  this.classList.add("active");
  document.querySelector(".calculate .gender .male").className = "male";
};

document.querySelector(".calculate .height input").onchange = function () {
  height = parseInt(this.value);
  document.querySelector(".calculate .height .val span").innerText = height;
};

document.querySelector(".calculate .height .val i.add").onclick = function () {
  height += 1;
  height = height > 220 ? 220 : height;
  document.querySelector(".calculate .height .val span").innerText = height;
  document.querySelector(".calculate .height input").value = height;
};

document.querySelector(".calculate .height .val i.sub").onclick = function () {
  height -= 1;
  height = height > 50 ? 50 : height;
  document.querySelector(".calculate .height .val span").innerText = height;
  document.querySelector(".calculate .height input").value = height;
};

document.querySelector(".calculate .weight input").onchange = function () {
  weight = parseInt(this.value);
  document.querySelector(".calculate .weight .val span").innerText = weight;
};

document.querySelector(".calculate .weight .val i.add").onclick = function () {
  weight += 1;
  weight = weight > 180 ? 180 : weight;
  document.querySelector(".calculate .weight .val span").innerText = weight;
  document.querySelector(".calculate .weight input").value = weight;
};

document.querySelector(".calculate .weight .val i.sub").onclick = function () {
  weight -= 1;
  weight = weight > 10 ? 10 : weight;
  document.querySelector(".calculate .weight .val span").innerText = weight;
  document.querySelector(".calculate .weight input").value = weight;
};

document.querySelector(".calculate .calc").onclick = function () {
  let bmi = weight / Math.pow(height / 100, 2).toFixed(2);
  height = 50;
  weight = 10;
  document.querySelector(".calculate .weight input").value = weight;
  document.querySelector(".calculate .weight .val span").innerText = weight;
  document.querySelector(".calculate .height input").value = height;
  document.querySelector(".calculate .height .val span").innerText = height;

  document.querySelector(".result .bmi .val").innerText = bmi;

  if (bmi < 18.5) {
    document.querySelector(".result .text").innerText = "YOU ARE UNDERWEIGHT!";
    document.querySelector(".result .bmi .val").style.color = "#3f51b5";
    document.querySelector(".result .text").style.color = "#3f51b5";
  } else if (bmi >= 18.5 && bmi < 25) {
    document.querySelector(".result .text").innerText =
      "YOU HAVE A HEALTHY WEIGHT!";
    document.querySelector(".result .bmi .val").style.color = "#0F4";
    document.querySelector(".result .text").style.color = "#0F4";
  } else if (bmi >= 25 && bmi < 30) {
    document.querySelector(".result .text").innerText = "YOU ARE OVERWEIGHT!";
    document.querySelector(".result .bmi .val").style.color = "#FFC107";
    document.querySelector(".result .text").style.color = "#FFC107";
  } else if (bmi >= 30) {
    document.querySelector(".result .text").innerText = "YOU ARE OBESE!";
    document.querySelector(".result .bmi .val").style.color = "#F00";
    document.querySelector(".result .text").style.color = "#F00";
  }

  document.querySelector(".calculate").style.display = "none";
  document.querySelector(".result").style.display = "flex";
};

document.querySelector(".result .recalc").onclick = function () {
  document.querySelector(".calculate").style.display = "flex";
  document.querySelector(".result").style.display = "none";
};
