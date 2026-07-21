import { commentsData } from './comments.js';

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

function reverseArray(array) {
  return array.reverse();
}
const numbersResult = reverseArray(numbers);
const amdVideoСardsResult = reverseArray(amdVideoСards);

console.log(numbersResult);
console.log(amdVideoСardsResult);

//=== Уровень 2 пункт 7===

const emailCom = commentsData.filter((comment) => {
  return comment.email.includes('.com');
});
console.log(emailCom);

//=== Уровень 2 пункт 8===

const commentsId = commentsData.map((comment) => {
  comment.postId = comment.id <= 5 ? 2 : 1;
  return comment;
});
console.log(commentsId);

//=== Уровень 2 пункт 9===

const commentNames = commentsData.map((comment) => {
  return {
    id: comment.id,
    name: comment.name
  };
});
console.log(commentNames);

//=== Уровень 2 пункт 10===

const validatedComments = commentsData.map((comment) => {
  if (comment.body.length > 180) {
    comment.isValid = true
  } else {
    comment.isValid = false 
  } 
  return comment;
});
console.log(validatedComments);

//=== Уровень 3 пункт 11===

const commentEmails = commentsData.reduce((mailСounter, comment) => {
   mailСounter.push(comment.email); 
   return mailСounter;
},[]);
console.log(commentEmails);

const commentEmails2 = commentsData.map((comment) => {
   return comment.email;
});
console.log(commentEmails2);

//=== Уровень 3 пункт 12===

const toStringEmails = commentEmails.join(' - ');
console.log(toStringEmails);

const toStringEmails2 = commentEmails2.join();
console.log(toStringEmails2);



