import type { Blog } from "@/types/blog";

export const getBlogs = async (size: number = 3) => {
  const response = await fetch(
    `https://joysomecream-us.backendless.app/api/data/blog?pageSize=${size}`
  );

  const blogs: Blog[] = await response.json();

  return blogs;
};
