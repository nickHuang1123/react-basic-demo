import { Suspense } from 'react'
import { atom, useAtom } from 'jotai'
import Button from '@mui/material/Button';

import jotai from '../jotai'

const { postId } = jotai;

const postData = atom(async (get) => {
  const id = get(postId);
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  )
  return await response.json();
});

function Next() {
  const [getSet, set] = useAtom(postId);
  return (
    <Button onClick={() => set((x) => x + 1)}>
      <h3>{getSet} →</h3>
    </Button>
  );
}
function PostTitle() {
  const [{ by, title, url, text, time }] = useAtom(postData);
  return (
    <>
      <h2>{by}</h2>
      <h6>{new Date(time * 1000).toLocaleDateString('en-US')}</h6>
      {title && <h4>{title}</h4>}
      <a href={url}>{url}</a>
      {text && <div>{text}</div>}
    </>
  );
}
export default function App() {
  return (
    <>
      <h1>
        jotai
      </h1>
      <Next />
      <div>
        <Suspense fallback={<h2>Loading...</h2>}>
          <PostTitle />
        </Suspense>
      </div>
    </>
  );
}