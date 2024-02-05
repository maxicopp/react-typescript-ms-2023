import { useEffect, useState } from 'react';
import { get } from './util/http';
import BlogPosts, { type BlogPost } from './components/BlogPosts';
import fetchingImg from './assets/data-fetching.png';

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();

  useEffect(() => {
    async function fetchData() {
      const data = await get<BlogPost[]>(
        'https://jsonplaceholder.typicode.com/posts'
      );

      setFetchedPosts(data);
    }
    fetchData();
  }, []);

  return (
    <main>
      <img
        src={fetchingImg}
        alt="An abstract image depicting a data fetching process."
      />
      {fetchedPosts && <BlogPosts posts={fetchedPosts} />}
    </main>
  );
}

export default App;
