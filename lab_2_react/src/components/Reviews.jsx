import { useEffect, useState } from "react";

export default function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/27/comments")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="md:col-span-2 bg-white dark:bg-slate-800 dark:text-slate-100 p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-4">Відгуки роботодавців</h2>
      <div className="space-y-4">
        {comments.map((c) => (
          <div key={c.id} className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <h4 className="font-semibold">{c.name}</h4>
            <small className="text-slate-500 dark:text-slate-300">{c.email}</small>
            <p className="mt-2">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
