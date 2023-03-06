import ProjectState, { Project, ProjectStatus } from "./ProjectState";
import Component from "./Component";
import ProjectItem from "./ProjectItem";

class ProjectList extends Component<HTMLDivElement, HTMLElement>{
  type: ProjectStatus;
  projects: Project[] = [];

  constructor(type: ProjectStatus) {
    super('project-list', 'app', false, `${type}-projects`);
    this.type = type;

    ProjectState.getInstance().addListener((projects: Project[]) => {
      this.projects = projects.filter(p => {
        if (this.type === ProjectStatus.Active) {
          return p.status === ProjectStatus.Active;
        }

        return p.status === ProjectStatus.Finished;
      });
      this.renderProjects();
    });

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
  }
}

export default ProjectList;
