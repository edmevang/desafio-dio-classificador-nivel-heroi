// npm install prompt-sync
console.log(
  "\nInstale no terminal o pacote prompt-sync com o comando 'npm install prompt-sync'\n"
);
const prompt = require('prompt-sync')({ sigint: true });
var hero = prompt('Digite o nome do seu herói: ');
var temp = prompt('Digite o XP de 0 até 10.001 ou superior do seu herói: ');
var xp = parseInt(temp);

if (xp < 1000) {
  console.log('O Herói de nome ' + hero + ' está no nível Ferro');
}
if (xp >= 1001 && xp <= 2000) {
  console.log('O Herói de nome ' + hero + ' está no nível Bronze');
}
if (xp >= 2001 && xp <= 5000) {
  console.log('O Herói de nome ' + hero + ' está no nível Prata');
}
if (xp >= 6001 && xp <= 7000) {
  console.log('O Herói de nome ' + hero + ' está no nível Ouro');
}
if (xp >= 7001 && xp <= 8000) {
  console.log('O Herói de nome ' + hero + ' está no nível Platina');
}
if (xp >= 8001 && xp <= 9000) {
  console.log('O Herói de nome ' + hero + ' está no nível Ascendente');
}
if (xp >= 9001 && xp <= 10000) {
  console.log('O Herói de nome ' + hero + ' está no nível Imortal');
}
if (xp >= 10001) {
  console.log('O Herói de nome ' + hero + ' está no nível Radiante');
}
