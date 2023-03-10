export enum ProjectStatus {
  Active = 'active',
  Finished = 'finished'
}

export class Project {
  public id: string;
  public title: string;
  public description: string;
  public people: number;
  public status: ProjectStatus;

  constructor(
    id: string,
    title: string,
    description: string,
    people: number,
    status: ProjectStatus
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.people = people;
    this.status = status;
  }
}

type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[];

  protected constructor() {
    this.listeners = [];
  }

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, people: number) {
    // 添加数据
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      people,
      ProjectStatus.Active
    );
    this.projects.push(newProject);

    // 触发监听事件
    this.updateListeners();
  }

  moveProject(id: string, newStatus: ProjectStatus): void {
    const project = this.projects.find(p => p.id === id);
    if (!project) return;

    if (project.status === newStatus) return;

    project.status = newStatus;
    this.updateListeners();
  }

  private updateListeners() {
    for (const listener of this.listeners) {
      listener(this.projects.slice()); // 返回拷贝的值
    }
  }
}

export default ProjectState;
