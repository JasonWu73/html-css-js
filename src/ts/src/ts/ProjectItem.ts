import Component from "./Component";
import { Project } from "./ProjectState";

export default class ProjectItem extends Component<HTMLUListElement, HTMLElement> {
  private project: Project;

  constructor(hostId: string, project: Project) {
    super('single-project', hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  configure(): void {
  }

  renderContent(): void {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = this.project.people + '';
    this.element.querySelector('p')!.textContent = this.project.description;
  }
}
