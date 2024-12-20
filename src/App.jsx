import './App.scss';
import { PostList } from './components/PostList';
import commentsFromServer from './api/comments.json';
import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';

function getComments(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

function getUser(userId) {
  return usersFromServer.find(user => user.id === userId);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App = () => (
  <section className="App">
    <PostList posts={posts} />
  </section>
);
