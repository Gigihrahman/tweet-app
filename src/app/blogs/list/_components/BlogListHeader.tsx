import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FC } from "react";

interface BlogListHeaderProps {
  category: string;
  setCategory: (value: string) => void;
  setSearch: (value: string) => void;
}
const BlogListHeader: FC<BlogListHeaderProps> = ({
  category,
  setCategory,
  setSearch,
}) => {
  return (
    <section className="max-w-[40%] mt-16 flex gap-4">
      <Input
        placeholder="Search...."
        onChange={(e) => setSearch(e.target.value)}
      />

      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="food">Food</SelectItem>
          <SelectItem value="technology">Technology</SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
};

export default BlogListHeader;
