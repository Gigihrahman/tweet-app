import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Blog } from "@/types/blog";
import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardPros {
  blog: Blog;
}
const BlogCard: FC<BlogCardPros> = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <Card>
        <CardHeader>
          <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
            <Image
              src={blog.thumbnail}
              alt="thumbnail"
              className="object-cover"
              fill
            />
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p className="line-clamp-4">{blog.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
