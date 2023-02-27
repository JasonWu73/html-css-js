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

  private gatherUserInput():
    [ title: string, description: string, people: number ] | void {
    const title = this.titleElement.value.trim();
    const description = this.descriptionElement.value.trim();
    const people = +this.peopleElement.value;

    if (title.length === 0 ||
      description.length === 0 ||
      isNaN(people) || people <= 0) {
      alert('Invalid input, please try again!');
      return;
    }

    return [ title, description, people ];
  }

  private clearUserInput() {
    this.titleElement.value = '';
    this.descriptionElement.value = '';
    this.peopleElement.value = '';
  }

  @AutoBind
  private submitHandler(event: SubmitEvent) {
    event.preventDefault();

    const userInput = this.gatherUserInput();
    if (!userInput) {
      return;
    }

    const [ title, description, people ] = userInput;
    console.log(title, description, people);
    this.clearUserInput();
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  private attachElement() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

export default ProjectInput;
