class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;

  constructor() {
    this.templateElement =
      document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElement =
    document.getElementById('app')! as HTMLDivElement;

    this.attachElement();
  }

  private attachElement() {
    const importedNode = document.importNode(this.templateElement.content, true);
    this.hostElement.insertAdjacentElement(
      'afterbegin',
      importedNode.firstElementChild!
    );
  }
}

export default ProjectInput;
