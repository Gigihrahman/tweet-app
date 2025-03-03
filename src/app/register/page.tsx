import RegisterForm from "@/app/register/_components/RegisterForm";

// Inisialisasi YupPassword untuk menambahkan aturan password

const Register = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        {/* Pass formik ke RegisterForm */}
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
