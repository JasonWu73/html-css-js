import 'reflect-metadata';

import '../css/style.css';

import { plainToInstance } from "class-transformer";
import { Post } from "./post.model";
// import { plainPostMapper } from "./post.model";

getPostsFromJsonPlaceHolder()
  .then(posts => {
    posts.forEach((post, index) =>
      console.log(`${index + 1}. ${post.getTitleInformation()}`));
  });

async function getPostsFromJsonPlaceHolder(): Promise<Post[]> {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?userId=1'
  );
  const posts: Post[] = await response.json();

  // return posts.map(post => plainPostMapper(post));

  return plainToInstance(Post, posts);
}
