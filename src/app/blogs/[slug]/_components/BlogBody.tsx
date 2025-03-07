import { getBlog } from "@/app/blogs/_api/getBlog";
import Markdown from "@/components/Markdown";
import React, { type FC } from "react";
interface BlogBodyProps {
  slug: string;
}
const BlogBody: FC<BlogBodyProps> = async ({ slug }) => {
  const blogs = await getBlog(slug);

  return (
    <section className="container mx-auto p-4">
      <Markdown content={blogs[0].content} />
    </section>
  );
};

export default BlogBody;
