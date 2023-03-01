class ProjectState {
  private listeners: Function[] = [];
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

  addListener(listenerFn: Function) {
    this.listeners.push(listenerFn);
  }

  addProject(title: string, description: string, people: number) {
    // 添加数据
    const newProject = {
      id: Math.random().toString(),
      title,
      description,
      people
    };
    this.projects.push(newProject);

    // 触发监听事件
    for (const listener of this.listeners) {
      listener(this.projects.slice()); // 返回拷贝的值
    }
  }
}

export default ProjectState;
