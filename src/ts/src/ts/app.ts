import 'reflect-metadata';
import { plainToInstance } from "class-transformer";

import '../css/style.css';
import { Post } from "./post.model";
import { validate } from "class-validator";
// import { plainPostMapper } from "./post.model";

getPostsFromJsonPlaceHolder()
  .then(posts => {
    posts.forEach((post, index) => {
      validate(post).then(errors => {
        if (errors.length > 0) {
          console.log('validation failed. errors: ', errors);
          return;
        }

        console.log(`${index + 1}. ${post.getTitleInformation()}`);
      });
    });
  });

async function getPostsFromJsonPlaceHolder(): Promise<Post[]> {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?userId=1'
  );
  const posts = await response.json();

  // return posts.map(post => plainPostMapper(post));

  return plainToInstance(Post, posts);
}
