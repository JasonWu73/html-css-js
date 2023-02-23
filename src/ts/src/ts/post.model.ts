export class Post {

  constructor(
    public userId: number,
    public id: number,
    public title: string,
    public body: string
  ) {
  }

  getTitleInformation(): string {
    return `${this.title} (Post ID: ${this.id}, User ID: ${this.userId})`;
  }
}

export function plainPostMapper(post: Post): Post {
  return new Post(post.userId, post.id, post.title, post.body);
}
