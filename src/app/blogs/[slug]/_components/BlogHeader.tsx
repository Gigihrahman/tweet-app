import { getBlog } from "@/app/blogs/_api/getBlog";
import React, { type FC } from "react";
import { format } from "date-fns";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
interface BlogHeaderProps {
  slug: string;
}
const BlogHeader: FC<BlogHeaderProps> = async ({ slug }) => {
  const blogs = await getBlog(slug);
  return (
    <section className="container mx-auto p-4">
      <Badge className="capitalize">{blogs[0].category}</Badge>
      <h1 className="text-4xl font-bold">{blogs[0].title}</h1>
      <p className="font-light text-sm">
        {format(new Date(blogs[0].created), "dd MMM yyyy")}
      </p>

      <div className="relative w-full h-[300px]">
        <Image
          src={blogs[0].thumbnail}
          alt="thumbnail"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default BlogHeader;
