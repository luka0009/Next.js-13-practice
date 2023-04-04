type Props = {
  promise: Promise<Post[]>;
};

export default async function UserPosts({ promise }: Props) {
  const posts = await promise;
  const content = posts.map((post, index) => {
    return (
      <article key={post.id}>
        ({index + 1})<h2>{post.title}</h2>
        <p>{post.body}</p>
        <br />
      </article>
    );
  });
  return <div>{content}</div>;
}
