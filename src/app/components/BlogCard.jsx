import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ blog }) {
  return (
   <Link href={`/pages/dropdownpages/blogs/${blog.slug}`}>
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer">
        
        <div className="relative h-48 mb-3">
          <Image
            src={blog.cover}
            alt={blog.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <h2 className="font-semibold text-lg mb-1">{blog.title}</h2>
        <p className="text-sm text-gray-500">{blog.date}</p>

        <button className="mt-3 bg-green-700 text-white px-4 py-2 rounded">
          Read More
        </button>

      </div>
    </Link>
  );
}