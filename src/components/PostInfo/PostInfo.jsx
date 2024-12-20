import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post: { title, body, comments, user } }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>
    </div>

    <UserInfo user={user} />

    <p className="PostInfo__body">{body}</p>

    <hr />

    <CommentList comments={comments} />
  </div>
);