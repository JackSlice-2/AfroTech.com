import React, { useEffect, useState } from 'react'
import { Trash } from 'lucide-react'


export const Todo = ({ task, deleteTodo, toggleComplete }) => {
  const [faviconUrl, setFaviconUrl] = useState('');

  useEffect(() => {
    const url = new URL(task.url);
    const faviconUrl = `${url.protocol}//${url.hostname}/favicon.ico`;
    setFaviconUrl(faviconUrl);
  }, [task.url]);

  return (
    <div className="Todo max-w-sm rounded overflow-hidden shadow-lg transition-transform hover:scale-110 px-6 py-4">
      <img className="h-15 w-15" src={faviconUrl} alt={task.task}></img>
        <div className="font-bold text-xl mb-2">
        <p
          className={`${task.completed ? 'completed ' : ''}text-red-700 text-xl`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>
        </div>
        <p className="text-gray-400 text-base h-20">{task.desc}</p>
        <a className="text-blue-700 text-base">{task.url}</a>
        {/* <Trash onClick={() => deleteTodo(task.id)} /> */}
        </div>
 
  )
}


