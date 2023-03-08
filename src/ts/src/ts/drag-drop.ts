export interface Draggable {
  dragStartHandler(event: DragEvent): void;

  dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {

  /**
   * 是否允许拖拽.
   */
  dragOverHandler(event: DragEvent): void;

  dropHandler(event: DragEvent): void;

  dragLeaveHandler(event: DragEvent): void;
}
