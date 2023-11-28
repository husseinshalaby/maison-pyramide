import React, { useState, useEffect } from 'react';

interface LoadingProps {
  text?: string;
  speed?: number;
}

const Loading: React.FC<LoadingProps> = ({ text = 'Loading', speed = 300 }) => {
  const [content, setContent] = useState(text);

  useEffect(() => {
    const id = window.setInterval(() => {
      setContent((content) => (content === `${text}...` ? text : `${content}.`));
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);

  return <p className="loading">{content}</p>;
};

export default Loading;