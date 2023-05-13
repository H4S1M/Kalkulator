import { hitungLuasSegitiga } from "./library/lib.js";

const alasInput = document.getElementById("alas");
const tinggiInput = document.getElementById("tinggi");
const hasilOutput = document.getElementById("hasil");
const btnHitung = document.getElementById("btn-hitung");

btnHitung.addEventListener("click", function () {
  const alas = alasInput.value;
  const tinggi = tinggiInput.value;
  const luas = hitungLuasSegitiga(alas, tinggi);
  hasilOutput.innerText = `Luas segitiga: ${luas.toFixed(2)}`;
});
