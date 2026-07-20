//=== Уровень 1 пункт 2===

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nums = numbers.filter((num) => {
  return num >= 5 && num <= 10;
})
console.log(nums);

//=== Уровень 1 пункт 3===

const amdVideoСards = ['Radeon RX 7600', 'Radeon RX 6600', 'Radeon RX 6600 XT', 'Radeon RX 7800 XT', 'Radeon RX 9070 XT'];
const result = amdVideoСards.includes('Radeon RX 9070 XT');
console.log(result);

//=== Уровень 1 пункт 4===

function reverse(array) {
  return array.reverse();
}
const numbersResult = reverse(numbers);
const amdVideoСardsResult = reverse(amdVideoСards);

console.log(numbersResult);
console.log(amdVideoСardsResult);

//=== Уровень 2 пункт 7===

import { commentsData } from './comments.js';

const emailCom = commentsData.filter((comment) => {
  return comment.email.includes('.com');
});
console.log(emailCom);

//=== Уровень 2 пункт 8===

const commentsId = commentsData.map((comment) => {
  if (comment.id <= 5) {
    comment.postId = 2 }
  else if (comment.id > 5) {
    comment.postId = 1 }
    return comment;
});
console.log(commentsId);

//=== Уровень 2 пункт 9===

const IdName = commentsData.map((comment) => {
  return ({
    id: comment.id,
    name: comment.name
});
});
console.log(IdName);

//=== Уровень 2 пункт 10===

const bodySize = commentsData.map((comment) => {
  if (comment.body.length > 180) {
    comment.isInvalid = true
  } else {
    comment.isInvalid = false 
  } 
  return comment;
});
console.log(bodySize);

//=== Уровень 3 пункт 11===

const allEmails = commentsData.reduce((mailСounter, comment) => {
   mailСounter.push(comment.email); 
   return mailСounter;
},[]);
console.log(allEmails);

const allEmails2 = commentsData.map((comment) => {
   return comment.email;
});
console.log(allEmails2);

//=== Уровень 3 пункт 12===

const toStringEmails = allEmails.join(' - ');
console.log(toStringEmails);

const toStringEmails2 = allEmails2.join();
console.log(toStringEmails2);



