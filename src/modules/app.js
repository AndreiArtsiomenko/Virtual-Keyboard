import CreateElements from './createElements.js';
import {
  keyboardRow1,
  keyboardRow2,
  keyboardRow3,
  keyboardRow4,
  keyboardRow5
} from './keyboard.js';

export default class App {
  constructor() {
    this.create = new CreateElements();
    this.lng = 'EN';
    this.register = 'down'
  }

  build() {
    const header = document.body.insertAdjacentElement('afterbegin', this.create.createTag('div', 'header'));
    const containerHeader = header.insertAdjacentElement('afterbegin', this.create.createTag('div', 'container'));
    containerHeader.insertAdjacentElement('afterbegin', this.create.createTag('h1', 'header__title', 'RSS Виртуальная клавиатура'));
    const main = document.body.insertAdjacentElement('beforeend', this.create.createTag('div', 'main'));
    const containerMain = main.insertAdjacentElement('afterbegin', this.create.createTag('div', 'container'));
    const mainWrapper = containerMain.insertAdjacentElement('beforeend', this.create.createTag('div', 'main__wrapper'));
    mainWrapper.insertAdjacentElement('afterbegin', this.create.createTag('textarea', 'main__textarea'));
    const keyboard = mainWrapper.insertAdjacentElement('beforeend', this.create.createTag('div', 'main__keyboard keyboard-body'));
    containerMain.insertAdjacentElement('beforeend', this.create.createTag('p', 'main__text', 'Клавиатура создана в операционной системе Windows'));
    containerMain.insertAdjacentElement('beforeend', this.create.createTag('p', 'main__text', 'Для переключения языка комбинация: левыe ctrl + alt'));

    const row1 = keyboard.insertAdjacentElement('afterbegin', this.create.createTag('div', 'keyboard-body__row'));
    Object.keys(keyboardRow1).forEach((element) => {
      let content;
      if (keyboardRow1[element]['name']) {
        content = keyboardRow1[element]['name'];
        row1.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key func', `${element}`, `${content}`))
      } else {
        content = keyboardRow1[element][this.lng][this.register];
        row1.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key', `${element}`, `${content}`))
      }
    });

    const row2 = keyboard.insertAdjacentElement('beforeend', this.create.createTag('div', 'keyboard-body__row'));
    Object.keys(keyboardRow2).forEach((element) => {
      let content;
      if (keyboardRow2[element]['name']) {
        content = keyboardRow2[element]['name'];
        row2.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key func', `${element}`, `${content}`))
      } else {
        content = keyboardRow2[element][this.lng][this.register];
        row2.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key', `${element}`, `${content}`))
      }
    });

    const row3 = keyboard.insertAdjacentElement('beforeend', this.create.createTag('div', 'keyboard-body__row'));
    Object.keys(keyboardRow3).forEach((element) => {
      let content;
      if (keyboardRow3[element]['name']) {
        content = keyboardRow3[element]['name'];
        row3.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key func', `${element}`, `${content}`))
      } else {
        content = keyboardRow3[element][this.lng][this.register];
        row3.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key', `${element}`, `${content}`))
      }
    });

    const row4 = keyboard.insertAdjacentElement('beforeend', this.create.createTag('div', 'keyboard-body__row'));
    Object.keys(keyboardRow4).forEach((element) => {
      let content;
      if (keyboardRow4[element]['name']) {
        content = keyboardRow4[element]['name'];
        row4.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key func', `${element}`, `${content}`))
      } else {
        content = keyboardRow4[element][this.lng][this.register];
        row4.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key', `${element}`, `${content}`))
      }
    });

    const row5 = keyboard.insertAdjacentElement('beforeend', this.create.createTag('div', 'keyboard-body__row'));
    Object.keys(keyboardRow5).forEach((element) => {
      let content;
      if (keyboardRow5[element]['name']) {
        content = keyboardRow5[element]['name'];
        row5.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key func', `${element}`, `${content}`))
      } else {
        content = keyboardRow5[element][this.lng][this.register];
        row5.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key', `${element}`, `${content}`))
      }
    });

  }
}