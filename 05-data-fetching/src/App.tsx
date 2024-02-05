import { useEffect, useState } from 'react';
import { get } from './util/http';
import BlogPosts, { type BlogPost } from './components/BlogPosts';
import fetchingImg from './assets/data-fetching.png';
import { z } from 'zod';

const BlogPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  text: z.string(),
});
const BlogPostArraySchema = z.array(BlogPostSchema);

type BlogResponse = {
  id: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();

  useEffect(() => {
    async function fetchData() {
      try {
        const rawData = await get<BlogResponse[]>('https://jsonplaceholder.typicode.com/posts');
        const validatedResponse = BlogPostArraySchema.parse(rawData.map(post => ({
          id: post.id,
          title: post.title,
          text: post.body,
        })));
        setFetchedPosts(validatedResponse);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <main>
      <h1>Data Fetching</h1>
      <img
        src={fetchingImg}
        alt="A depiction of data fetching."
      />
      {fetchedPosts && <BlogPosts posts={fetchedPosts} />}
    </main>
  );
}

export default App;
