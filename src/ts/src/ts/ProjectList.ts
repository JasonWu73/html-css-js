type ListType = 'active' | 'finished';

class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;
  type: ListType

  constructor(type: ListType) {
    this.type = type;

    this.templateElement = document.getElementById('project-list')! as
      HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as
      HTMLDivElement;

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLElement;
    this.element.id = `${this.type}-projects`;

    this.attachElement();
  }

  private attachElement() {
    this.hostElement.insertAdjacentElement('beforeend', this.element);
  }
}

export default ProjectList;
