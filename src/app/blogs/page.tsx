import BlogList from "@/app/blogs/_components/BlogList";
import Jumbotron from "@/app/blogs/_components/Jumbotron";
import { Suspense } from "react";
import BlogListSkeleton from "./_components/BlogListSkeleton";

const Blogs = () => {
  return (
    <main>
      <Jumbotron />
      <Suspense fallback={<BlogListSkeleton />}>
        <BlogList />
      </Suspense>
    </main>
  );
};

export default Blogs;
