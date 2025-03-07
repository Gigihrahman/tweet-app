import { getBlogs } from "@/app/blogs/_api/getBlogs";
import BlogCard from "@/app/blogs/_components/BlogCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const BlogList = async () => {
  const blogs = await getBlogs();
  return (
    <section className="container  mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog) => {
          return <BlogCard key={blog.objectId} blog={blog} />;
        })}
      </div>
    </section>
  );
};

export default BlogList;
