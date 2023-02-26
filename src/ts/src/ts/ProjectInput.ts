import { AutoBind } from "./decorators";

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleElement: HTMLInputElement;
  descriptionElement: HTMLTextAreaElement;
  peopleElement: HTMLInputElement;

  constructor() {
    this.templateElement =
      document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElement =
      document.getElementById('app')! as HTMLDivElement;

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement;

    this.titleElement = this.element.querySelector('#title') as
      HTMLInputElement;
    this.descriptionElement = this.element.querySelector('#description') as
      HTMLTextAreaElement;
    this.peopleElement = this.element.querySelector('#people') as
      HTMLInputElement;

    this.configure();
    this.attachElement();
  }

  @AutoBind
  private submitHandler(event: SubmitEvent) {
    event.preventDefault();

    const title = this.titleElement.value.trim();
    const description = this.descriptionElement.value.trim();
    const people = +this.peopleElement.value;

    const formData = { title, description, people };

    console.log(formData);
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  private attachElement() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

export default ProjectInput;
