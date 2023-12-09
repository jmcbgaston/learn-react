// # Server Component
// Allows you to write UI that can be rendered and optionally cached on the server.
// In Next.js, the rendering work is further split by route segments to enable streaming and partial rendering, and there are three different server rendering strategies
// - Static Rendering
// - Dynamic Rendering
// - Streaming

// Next.js uses Server Components by default
// - this is to improve your application's performance and means you don't have to take additional steps to adopt them.

import LikeButton from "./like-button";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = ["Abby", "Bobby", "Cassey"];
  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />

      <ul>
        {names.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>

      <LikeButton />
    </div>
  );
}
