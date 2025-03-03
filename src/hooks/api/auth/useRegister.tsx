import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { useRouter } from "next/navigation";

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
      alert("Register berhasil");
      router.push("/login");
    },
    onError: (error: AxiosError<{ message: string; code: number }>) => {
      alert(error.response?.data.message);
    },
  });
};

export default useRegister;
