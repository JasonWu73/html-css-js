import ProjectState, { Project, ProjectStatus } from "./ProjectState";

class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;
  type: ProjectStatus;
  projects: Project[] = [];

  constructor(type: ProjectStatus) {
    this.type = type;

    this.templateElement = document.getElementById('project-list')! as
      HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as
      HTMLDivElement;

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLElement;
    this.element.id = `${this.type}-projects`;

    ProjectState.getInstance().addListener((projects: Project[]) => {
      this.projects = projects.filter(p => {
        if (this.type === ProjectStatus.Active) {
          return p.status === ProjectStatus.Active;
        }

        return p.status === ProjectStatus.Finished;
      });
      this.renderProjects();
    });

    this.attachElement();
    this.renderContent();
  }

  private renderProjects() {
    const listId = `${this.type}-projects-list`;
    const listEl = document.getElementById(listId)!;
    listEl.innerHTML = '';
    for (const item of this.projects) {
      const listItem = document.createElement('li');
      listItem.textContent = item.title;
      listEl.appendChild(listItem);
    }
  }

  private renderContent() {
    this.element.querySelector('ul')!.id = `${this.type}-projects-list`;
    this.element.querySelector('h2')!.textContent =
      `${this.type.toUpperCase()} PROJECTS`;
  }

  private attachElement() {
    this.hostElement.insertAdjacentElement('beforeend', this.element);
  }
}

export default ProjectList;
