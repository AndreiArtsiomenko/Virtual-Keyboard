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
  }
}

export default CreateElements;