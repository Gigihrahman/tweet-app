import { Shell } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Shell className="animate-spin size-24" />
    </div>
  );
};

export default Loading;
