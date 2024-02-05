import { useEffect, useState } from 'react';
import { get } from './util/http';
import BlogPosts, { type BlogPost } from './components/BlogPosts';
import ErrorMessage from './components/ErrorMessage';
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
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
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
        setError((error as Error).message);
      } finally {
        setIsFetching(false);
      }
    }
    fetchData();
  }, []);

  function renderContent() {
    if (error) {
      return <ErrorMessage text={error} />;
    } else if (isFetching) {
      return <p id="loading-fallback">Fetching posts...</p>;
    } else if (fetchedPosts) {
      return <BlogPosts posts={fetchedPosts} />;
    }
    return null;
  }

  return (
    <main>
      <h1>Data Fetching</h1>
      <img src={fetchingImg} alt="A depiction of data fetching." />
      {renderContent()}
    </main>
  );
}

export default App;
