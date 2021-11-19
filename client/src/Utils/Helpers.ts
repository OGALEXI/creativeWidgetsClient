import { Widget } from '../Types/Widget';
import { Element } from '../Types/Element';
import { Parser } from 'expr-eval';

//function creates a next alphabetical identifier for elements
export function nextChar(char: string): string {
  return String.fromCharCode(char.charCodeAt(0) + 1);
}

// calculate result from user's formula
interface InputValues {
  [key: string]: number;
}

export function calculateResult(widget: Widget): number {
  const parser = new Parser();
  const userExpression = parser.parse(widget.formula.toLowerCase());

  const inputValues: InputValues = {};

  widget.elements.forEach((el: Element) => {
    inputValues[el.elementLetter.toLowerCase()] = el.value;
  });

  return userExpression.evaluate(inputValues);
}

// validation function to define results screen (simple check if formula letter exists within the container)
export function isValidFormula(widget: Widget): boolean {
  const lettersInFormula = widget.formula.match(/([A-Z])+/g);
  if (!widget.formula || !lettersInFormula) {
    return true;
  }
  if (lettersInFormula.some((letter: string) => letter.length !== 1)) {
    return false;
  }

  const lettersInWidget = widget.elements.map(
    (el: Element) => el.elementLetter
  );
  for (const letter of lettersInFormula) {
    if (!lettersInWidget.includes(letter)) {
      return false;
    }
  }
  return true;
}

export function genErrorMessage(widget: Widget): string {
  const lettersInFormula = widget.formula.match(/([A-Z])+/g);
  const lettersInWidget = widget.elements.map(
    (el: Element) => el.elementLetter
  );
  const errorLetters: string[] = [];

  for (const letter of lettersInFormula!) {
    if (!lettersInWidget.includes(letter)) errorLetters.push(letter);
  }

  return `Elements with letter "${[...errorLetters]}" don't exist`;
}
