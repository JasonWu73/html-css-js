import Component from "./Component";
import { Project } from "./ProjectState";
import { Draggable } from "./drag-drop";
import { AutoBind } from "./decorators";

export default class ProjectItem
  extends Component<HTMLUListElement, HTMLElement>
  implements Draggable {
  private project: Project;

  constructor(hostId: string, project: Project) {
    super('single-project', hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  get persons() {
    if (this.project.people === 1) {
      return '1 person';
    }

    return `${this.project.people} persons`;
  }

  configure(): void {
    this.element.addEventListener('dragstart', this.dragStartHandler);
    this.element.addEventListener('dragend', this.dragEndHandler);
  }

  renderContent(): void {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = `${this.persons} assigned`;
    this.element.querySelector('p')!.textContent = this.project.description;
  }

  @AutoBind
  dragStartHandler(event: DragEvent): void {
    console.log('drag start', event);
  }

  @AutoBind
  dragEndHandler(event: DragEvent): void {
    console.log('drag end', event);
  }
}
