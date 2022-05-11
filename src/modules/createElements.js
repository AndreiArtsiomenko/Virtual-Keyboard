class CreateElements {
  constructor() {
    this.createTag = (nameTag, nameClass, content) => {
      const tag = document.createElement(nameTag);
      tag.className = nameClass;
      if (content) {
        tag.innerHTML = content;
      }

      return tag;
    }

    this.createKey = (nameTag, nameClass, eventCode, content) => {
      const key = document.createElement(nameTag);
      key.className = nameClass;
      key.setAttribute('eventCode', `${eventCode}`)
      key.innerHTML = content;

      return key;
    }
  }
}

export default CreateElements;