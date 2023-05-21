"use strict";

// Задача 1
// уровень сложности: Level 1
// Последовательность ([{}]) является правильной, а последовательности ([)], {()]
// правильными не являются. Докажите это используя стек!

function isBalanced(sequence) {
  const stack = [];
  const openingBrackets = ["(", "[", "{"];
  const closingBrackets = [")", "]", "}"];

  for (let i = 0; i < sequence.length; i++) {
    const bracket = sequence[i];

    if (openingBrackets.includes(bracket)) {
      stack.push(bracket);
    } else if (closingBrackets.includes(bracket)) {
      const lastBracket = stack.pop();
      const openingBracketIndex = openingBrackets.indexOf(lastBracket);
      const correspondingClosingBracket = closingBrackets[openingBracketIndex];

      if (bracket !== correspondingClosingBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const sequence1 = "[{}]";
console.log(isBalanced(sequence1));

const sequence2 = "[)]";
console.log(isBalanced(sequence2));

const sequence3 = "{()]";
console.log(isBalanced(sequence3));

// Задача2
// Level 2
// Дан односвязный список. Написать функцию или блок схему, определяющую, образуют ли его элементы
// симметричную последовательность. Для решения задачи использовать стек и очередь.
// Функция будет возвращать значение true, если список является симметричным, false – в противном случае.
// По определению пустой список является симметричным. Поэтому, если список пуст, то возвращаем значение true.
// Для проверки симметричности списка нужно проверить на равенство все пары элементов, равноотстоящих от середины списка.
// Каждая пара содержит один элемент из первой половины списка и один – из второй.
// Элементы первой половины списка последовательно заносятся в очередь, второй половины в стек.
// Если количество элементов списка будет нечетным, то серединный элемент будет симметричен сам себе
// и не будет помещен ни в очередь, ни в стек.

// Вопрос по задаче: можно реализовать только со стеком, без очереди, то есть разбив список на 2 половины
// одну половину запушить в стек, а потом сравнивать элементы этой половины из стека с элементами
// оставшейся половины в списке. Было бы такое решение релевантным? Почему?

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function isListSymmetric(head) {
  if (!head) {
    return true;
  }

  const stack = [];
  const queue = [];
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    queue.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast) {
    slow = slow.next;
  }

  while (slow) {
    stack.push(slow.value);
    slow = slow.next;
  }

  while (queue.length > 0 && stack.length > 0) {
    if (queue.shift() !== stack.pop()) {
      return false;
    }
  }

  return true;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(2);
const node5 = new Node(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(isListSymmetric(node1));
