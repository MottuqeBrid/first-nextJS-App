// const page = ({ params }) => {
//   //   console.log(params);
//   return (
//     <div>
//       <p>User Information Is: {params.userid}</p>
//     </div>
//   );
// };

// export default page;

"use client"; // Enables Client Component behavior

import { useParams } from "next/navigation";

export default function page() {
  const { userid } = useParams(); // Get dynamic parameter

  return (
    <div>
      <p>User Information Is: {userid}</p>
    </div>
  );
}


// export default Page;
