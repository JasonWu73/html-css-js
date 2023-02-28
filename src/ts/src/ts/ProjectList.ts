class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;

  constructor() {
    this.templateElement = document.getElementById('project-list')! as
      HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as
      HTMLDivElement;

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLElement;

    this.attachElement();
  }

  private attachElement() {
    this.hostElement.insertAdjacentElement('beforeend', this.element);
  }
}

export default ProjectList;
