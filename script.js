const count = document.getElementById("count");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const clear = document.getElementById("clear");

plus.onclick = () => count.value = Number(count.value) + 1;
minus.onclick = () => count.value = Number(count.value) - 1;
clear.onclick = () => count.value = 0;

// Keyboard support
document.body.onkeydown = (e) => {
    if (e.code === "Space") {
        count.value = Number(count.value) + 1;
    }
    if (e.code === "ArrowUp") {
        count.value = Number(count.value) + 1;
    }
    if (e.code === "ArrowDown") {
        count.value = Number(count.value) - 1;
    }
};
