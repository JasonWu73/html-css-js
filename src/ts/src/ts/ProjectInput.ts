import { AutoBind } from "./decorators";
import { validate } from "./validator";
import ProjectState from "./ProjectState";
import Component from "./Component";

class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{
  titleElement: HTMLInputElement;
  descriptionElement: HTMLTextAreaElement;
  peopleElement: HTMLInputElement;

  constructor() {
    super('project-input', 'app', true);

    this.titleElement = this.element.querySelector('#title') as
      HTMLInputElement;
    this.descriptionElement = this.element.querySelector('#description') as
      HTMLTextAreaElement;
    this.peopleElement = this.element.querySelector('#people') as
      HTMLInputElement;

    this.configure();
  }

  private gatherUserInput():
    [ title: string, description: string, people: number ] | void {
    const title = this.titleElement.value.trim();
    const description = this.descriptionElement.value.trim();
    const people = +this.peopleElement.value;

    if (
      !validate({ value: title, required: true }) ||
      !validate({ value: description, required: true, minLength: 5 }) ||
      !validate({ value: people, required: true, min: 1 })
    ) {
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
    ProjectState.getInstance().addProject(title, description, people);

    this.clearUserInput();
  }

  configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  renderContent(): void {
  }
}

export default ProjectInput;
