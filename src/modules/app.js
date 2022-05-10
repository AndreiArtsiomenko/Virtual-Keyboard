import CreateElements from './createElements.js';
import {
  keyboardRow1,
  keyboardRow2
} from './keyboard.js';

export default class App {
  constructor() {
    this.create = new CreateElements();
    this.lng = 'EN';
    this.upperCase = 'down'
  }

  build() {
    const header = document.body.insertAdjacentElement('afterbegin', this.create.createTag('div', 'header'));
    const containerHeader = header.insertAdjacentElement('afterbegin', this.create.createTag('div', 'container'));
    containerHeader.insertAdjacentElement('afterbegin', this.create.createTag('h1', 'header__title', 'RSS Виртуальная клавиатура'));
    const main = document.body.insertAdjacentElement('beforeend', this.create.createTag('div', 'main'));
    const containerMain = main.insertAdjacentElement('afterbegin', this.create.createTag('div', 'container'));
    const mainWrapper = containerMain.insertAdjacentElement('beforeend', this.create.createTag('div', 'main__wrapper'));
    const textarea = mainWrapper.insertAdjacentElement('afterbegin', this.create.createTag('textarea', 'main__textarea'));
    const keyboard = mainWrapper.insertAdjacentElement('beforeend', this.create.createTag('div', 'main__keyboard keyboard-body'));
    containerMain.insertAdjacentElement('beforeend', this.create.createTag('p', 'main__text', 'Клавиатура создана в операционной системе Windows'));
    containerMain.insertAdjacentElement('beforeend', this.create.createTag('p', 'main__text', 'Для переключения языка комбинация: левыe ctrl + alt'));

  }
}