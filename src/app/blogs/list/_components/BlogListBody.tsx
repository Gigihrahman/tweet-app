import BlogCard from "@/app/blogs/_components/BlogCard";
import type { Blog } from "@/types/blog";
import type { FC } from "react";

interface BlogListBodyProps {
  isPending: boolean;
  blogs?: Blog[];
}

const BlogListBody: FC<BlogListBodyProps> = ({ isPending, blogs }) => {
  return (
    <section className="grid grid-cols-4 gap-4 mt-12">
      {isPending && (
        <div className="flex justify-center items-center h-[30vh] col-span-4">
          {" "}
          Loading....
        </div>
      )}
      {blogs?.map((blog) => {
        return <BlogCard key={blog.objectId} blog={blog} />;
      })}
    </section>
  );
};

export default BlogListBody;
