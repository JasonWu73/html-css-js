class ProjectState {
  private projects: any[] = [];

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
