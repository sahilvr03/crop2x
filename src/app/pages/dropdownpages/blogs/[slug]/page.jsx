import { blogs } from "../../../../blog";
import Image from "next/image";

export default async function BlogDetail({ params }) {
    console.log(params.slug);
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="p-10">Blog not found</div>;
  }

  return (
    <div className="bg-[#f6f6f6] min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow">

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          {blog.title}
        </h1>

        {/* Date */}
        <p className="text-gray-500 mb-6">{blog.date}</p>

        {/* Main Image */}
        <div className="relative w-full h-[350px] mb-6">
          <Image
            src={blog.cover}
            alt="cover"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {blog.images.map((img, i) => (
            <div key={i} className="relative h-[120px]">
              <Image
                src={img}
                alt="gallery"
                fill
                className="object-cover rounded-md hover:scale-105 transition"
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </div>

      </div>
    </div>
  );
}