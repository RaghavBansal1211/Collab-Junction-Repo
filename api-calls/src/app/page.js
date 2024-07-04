"use client"
import Link from "next/link";


export default function Home() {
  return (
   <div>
      <h1>API CALLS IN NEXTJS</h1>
      <br/>
      <br/>
      <Link href="/productlist" className="bg-black text-white rounded-sm">Go to productlist(client side rendering)</Link>
      <br/>
      <br/>
      <Link href="/productlistServer" className="bg-black text-white rounded-sm">Go to productlist(Serverside rendering)</Link>
    </div>
  );
}
