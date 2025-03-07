"use client";
import useGetBlogs from "@/hooks/api/blog/useGetBlogs";
import BlogListBody from "@/app/blogs/list/_components/BlogListBody";
import BlogListHeader from "@/app/blogs/list/_components/BlogListHeader";
import PaginationSection from "@/components/PaginationSection";
import { useState } from "react";
import { useDebounceValue } from "usehooks-ts";
const LIMIT = 2;
const BlogList = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  console.log(category);
  const [debounceValue] = useDebounceValue(search, 700);
  const { data: blogs, isPending } = useGetBlogs({
    title: debounceValue,
    category,
    limit: LIMIT,
    offset: (page - 1) * LIMIT,
  });

  return (
    <main className="contianer mx-auto p-4">
      {/* blog list header */}
      <BlogListHeader
        category={category}
        setCategory={setCategory}
        setSearch={setSearch}
      />
      {/* blog list body */}
      <BlogListBody isPending={isPending} blogs={blogs?.data} />
      {/* pagination section */}

      <PaginationSection
        page={page}
        count={blogs?.count || 0}
        limit={LIMIT}
        setPage={setPage}
      />
    </main>
  );
};
export default BlogList;
