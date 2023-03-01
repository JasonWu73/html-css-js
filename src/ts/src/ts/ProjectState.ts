class ProjectState {
  private projects: any[] = [];
  private static instance: ProjectState

  private constructor() {
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, people: number) {
    const newProject = {
      id: Math.random().toString(),
      title,
      description,
      people
    };
    this.projects.push(newProject);
  }
}

export default ProjectState;
