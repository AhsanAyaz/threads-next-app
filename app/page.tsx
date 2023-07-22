import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
import { getCurrentUser } from "./lib/session";

export default async function Home() {
  const user = await getCurrentUser();
  const comments = [{
    text: 'Sample comment',
    _id: '1234',
    parent: null,
    user: {
      _id: '12345',
      name: 'Sample User'
    }
  }, {
    text: 'Sample comment 22222',
    _id: '12345',
    parent: null,
    user: {
      _id: '12345',
      name: 'Sample User 213123123'
    }
  }]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl">Welcome to Threads App</h1>
      {!!user && (
        <section>
          <CommentForm placeholder="Write something..." buttonText="Submit" />
        </section>
      )}
      {comments.map((comment) => {
        return <Comment user={user} key={comment._id} comment={comment} />;
      })}
    </main>
  );
}
