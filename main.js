

let num1 = 120
let num2 = 10

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let result = document.getElementById("sum-el")
function add(){
let sum = num1 + num2
	result.textContent = sum
}
function subtract(){
let sum = num1 - num2
	result.textContent = sum
}
function divide(){

	let sum = num1 / num2
	result.textContent = sum 
}
function multiply(){

	let sum = num1 * num2
	result.textContent = sum
}