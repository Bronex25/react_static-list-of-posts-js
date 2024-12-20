import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <>
    <h1 className="App__title">Static list of posts</h1>

    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </>
);
