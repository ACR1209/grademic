import AuthForm, { AuthData } from "@/components/AuthForm/AuthForm";
import AuthHeader from "@/components/AuthHeader/AuthHeader";
import ImageWBackground from "@/components/ImageWBackground/ImageWBackground";
import PageWithNavbarNoFooter from "@/layout/PageWithNavbarNoFooter";
import { signIn } from "next-auth/react";
import React, { FormEvent } from "react";

function Login() {
  const handleLogin = async (
    e: FormEvent<HTMLFormElement>,
    authData: AuthData
  ) => {
    e.preventDefault();

    await signIn("credentials", {
      email: authData.email,
      password: authData.password,
      callbackUrl: "/",
    });
  };
  return (
    <PageWithNavbarNoFooter>
      <div className="flex flex-col lg:flex-row px-5 py-2 lg:px-20 lg:py-10">
        <div className="w-full lg:w-1/3 flex flex-col">
          <AuthHeader
            title="¡Bienvenido de vuelta!"
            subtitle="Porfavor introduce tus credenciales para iniciar sesión."
          />
          <div className="mt-5">
            <AuthForm
              handleSubmit={handleLogin}
              buttonContent="Iniciar sesión en Grademic"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <ImageWBackground
            color="grademic-yellow-800"
            path="/loginSized.png"
          />
        </div>
      </div>
    </PageWithNavbarNoFooter>
  );
}

export default Login;
