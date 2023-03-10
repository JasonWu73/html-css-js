import ProjectState, { Project, ProjectStatus } from "./ProjectState";
import Component from "./Component";
import ProjectItem from "./ProjectItem";
import { DragTarget } from "./drag-drop";
import { AutoBind } from "./decorators";

class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget {
  type: ProjectStatus;
  projects: Project[] = [];

  constructor(type: ProjectStatus) {
    super('project-list', 'app', false, `${type}-projects`);
    this.type = type;

    this.configure();
    this.renderContent();
  }

  private renderProjects() {
    const listId = `${this.type}-projects-list`;
    const listEl = document.getElementById(listId)!;
    listEl.innerHTML = '';
    for (const item of this.projects) {
      new ProjectItem(listId, item);
    }
  }

  renderContent() {
    this.element.querySelector('ul')!.id = `${this.type}-projects-list`;
    this.element.querySelector('h2')!.textContent =
      `${this.type.toUpperCase()} PROJECTS`;
  }

  configure() {
    this.element.addEventListener('dragover', this.dragOverHandler);
    this.element.addEventListener('drop', this.dropHandler);
    this.element.addEventListener('dragleave', this.dragLeaveHandler);

    ProjectState.getInstance().addListener((projects: Project[]) => {
      this.projects = projects.filter(p => {
        if (this.type === ProjectStatus.Active) {
          return p.status === ProjectStatus.Active;
        }

        return p.status === ProjectStatus.Finished;
      });
      this.renderProjects();
    });
  }

  @AutoBind
  dragOverHandler(event: DragEvent): void {
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault();
      const ulEl = this.element.querySelector('ul')!;
      ulEl.classList.add('droppable');
    }
  }

  @AutoBind
  dropHandler(event: DragEvent): void {
    const projectId = event.dataTransfer!.getData("text/plain");
    ProjectState.getInstance().moveProject(projectId, this.type);
  }

  @AutoBind
  dragLeaveHandler(event: DragEvent): void {
    const ulEl = this.element.querySelector('ul')!;
    ulEl.classList.remove('droppable');
  }
}

export default ProjectList;
