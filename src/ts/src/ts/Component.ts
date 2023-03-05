// 抽象类, 应该该类的目的不是给用户实例化
export default abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  protected constructor(
    templateElementId: string,
    hostElementId: string,
    insertAtBeginning: boolean,
    newElementId?: string
  ) {
    // 定义模板和绑定目标
    this.templateElement = document.getElementById(templateElementId)! as
      HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;

    // 获取需要添加到 DOM 的实际元素
    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as U;
    newElementId && (this.element.id = newElementId);

    // 添加到 DOM
    this.attachElement(insertAtBeginning);
  }

  private attachElement(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? 'afterbegin' : 'beforeend',
      this.element
    );
  }

  abstract configure(): void;

  abstract renderContent(): void;
}
