import { useState } from "react";
import { Button } from "./components/Button";
import { InputForm } from "./components/InputForm";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const createUserFormSchema = z.object({
  email: z
    .string()
    .email("Formato de email Inválido")
    .min(6, "O e-mail deve conter no mínimo 6 caracteres"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

type createUserFormData = z.infer<typeof createUserFormSchema>;

export const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserFormSchema),
  });
  const [output, setOutput] = useState("");

  function createUser(data: createUserFormData) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <div className="bg-slate-600 py-8 px-3 m-2 rounded-md flex flex-col justify-center align-middle gap-2">
      <h1 className="text-center text-2xl font-bold text-emerald-400 antialiased">
        LOGIN
      </h1>
      <form
        className="flex flex-col justify-center align-middle gap-4 w-full max-w-sm h-auto max-h-fit"
        onSubmit={handleSubmit(createUser)} //problema de tipagem
        action="POST"
      >
        <InputForm
          title="Email"
          error={errors.email?.message} //problema de tipagem
          type="email"
          {...register("email")}
        />
        <InputForm
          title="Senha"
          type="password"
          error={errors.password?.message} //problema de tipagem
          {...register("password")}
        />
        <Button type="submit">Login</Button>
      </form>
      <pre>{output}</pre>
    </div>
  );
};
