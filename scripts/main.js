'use strict';
var name = prompt('Hello what word should I refer to you as?');
var greet = 'Hello' + ' ' + name +' ' + 'your hair is really on point today.' + 'I hope you are fairing well.';
console.log(greet);
var list = document.getElementById('list');
list.innerHTML = greet;

var sent = 'She"\'"s going to the park';
