import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="">
        <h2 className="text-2xl">Not Found</h2>
        <p>Could not find requested resource</p>
        <Link className="text-[#EE5953]" href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
