// # Client Component
// Allows you to write interactive UI that can be rendered on the client at request time.
// In Next.js, client rendering is opt-in, meaning you have to explicitly decide what components React should render on the client.

"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes((prevLikes) => (prevLikes += 1));
  }

  return <button onClick={handleClick}>Like({likes})</button>;
}
