let num = [5, 8, 2, 9, 3, 4, 6, 7, 0]
num.push(1)

console.log(num)
for (let pos = 0; pos < num.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(num)
for (let pos in num) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}