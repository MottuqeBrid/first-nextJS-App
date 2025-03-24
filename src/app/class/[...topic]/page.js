import Link from "next/link";

export default function Page({ params }) {
  const { topic } = params;

  return (
    <div>
      
      <Link href="/">Go to Home</Link>
      <h2>This is the Catch-All Segment Page</h2>
      {/* <p>{Array.isArray(topic) ? topic.join(" / ") : topic}</p> */}
      <p>{topic.join(" / ")}</p>
    </div>
  );
}
