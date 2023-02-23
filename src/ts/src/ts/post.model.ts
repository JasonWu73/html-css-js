import { IsEmpty } from "class-validator";

export class Post {
  userId: number;
  public id: number;
  public title: string;
  @IsEmpty({ message: "内容必须为空" })
  public body: string;

  constructor(userId: number, id: number, title: string, body: string) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }

  getTitleInformation(): string {
    return `${this.title} (Post ID: ${this.id}, User ID: ${this.userId})`;
  }
}

export function plainPostMapper(post: Post): Post {
  return new Post(post.userId, post.id, post.title, post.body);
}
