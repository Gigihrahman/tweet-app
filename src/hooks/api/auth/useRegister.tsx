import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Payload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (payload: Payload) => {
      await axiosInstance.post("/users/register", {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password,
      });
    },
    onSuccess: () => {
      toast.success("Register Success");
      router.push("/login");
    },
    onError: (error: AxiosError<{ message: string; code: number }>) => {
      toast.error(error.response?.data.message);
    },
  });
};

export default useRegister;
