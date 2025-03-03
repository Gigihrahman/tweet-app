import * as Yup from "yup";
import YupPassword from "yup-password";

// Inisialisasi YupPassword untuk menambahkan aturan password
YupPassword(Yup);

export const RegisterValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Firstname is required"),
  lastName: Yup.string().required("Lastname is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .minUppercase(1, "Password must contain at least one uppercase letter")
    .minNumbers(1, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match!")
    .required("Confirm password is required"),
});
