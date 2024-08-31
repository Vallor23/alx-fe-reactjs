import { useParams } from "react-router-dom";


function BlogPost() {
    const {id} = useParams();

    const blogPosts = {
        1: {
          title: "First Blog Post",
          content: "This is the content of the first blog post."
        },
        2: {
          title: "Second Blog Post",
          content: "This is the content of the second blog post."
        }
      };

    const post = blogPosts[id];

      if (!post) {
        return <h2>Blog post not found!</h2>;
      }

        return (
            <div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>
          ) 
};

export default BlogPost;