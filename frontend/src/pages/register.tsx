import AuthForm, { AuthData } from "@/components/AuthForm/AuthForm";
import AuthHeader from "@/components/AuthHeader/AuthHeader";
import ImageWBackground from "@/components/ImageWBackground/ImageWBackground";
import PageWithNavbarNoFooter from "@/layout/PageWithNavbarNoFooter";
import React, { FormEvent } from "react";

function Register() {
  const handleRegister = (
    e: FormEvent<HTMLFormElement>,
    authData: AuthData
  ) => {
    e.preventDefault();
    console.log("gere");
  };
  return (
    <PageWithNavbarNoFooter>
      <div className="flex flex-col md:flex-row px-5 py-2 md:px-20 md:py-10">
        <div className="w-full md:w-1/3 flex flex-col">
          <AuthHeader
            title="Únete a Grademic"
            subtitle="Porfavor introduce tus datos para registrarte en la mejor plataforma para reseñas."
          />
          <div className="mt-5">
            <AuthForm
              handleSubmit={handleRegister}
              buttonContent="Registrarme en Grademic"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <ImageWBackground color="grademic-red-800" path="/register.png"/>
        </div>
      </div>
    </PageWithNavbarNoFooter>
  );
}

export default Register;
