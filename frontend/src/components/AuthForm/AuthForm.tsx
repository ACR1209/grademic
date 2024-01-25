import { notoSerif } from "@/utils/fonts";
import React, { FormEvent, useState } from "react";
import ArrowButton from "./ArrowButton";
export type AuthData = { email: string; password: string };

function AuthForm({
  handleSubmit, buttonContent
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>, authData: AuthData) => void;
  buttonContent: string
}) {
  const [authData, setAuthData] = useState<AuthData>({
    email: "",
    password: "",
  });
  return (
    <form onSubmit={(e) => handleSubmit(e, authData)}>
      <div className="flex flex-col">
        <label className={`${notoSerif.className} font-bold text-sm`}>Correo electrónico</label>
        <input
          type="text"
          name="email"
          className="border-2 border-grademic-black-900 bg-grademic-white-800 px-3 py-2 rounded-lg"
          onChange={(e) => {
            setAuthData({ ...authData, [e.target.name]: e.target.value });
          }}
        />
      </div>
      <div className="flex flex-col my-3">
        <label className={`${notoSerif.className} font-bold text-sm`}>Contraseña</label>
        <input
          type="password"
          name="password"
          className="border-2 border-grademic-black-900 bg-grademic-white-800 px-3 py-2 rounded-lg"
          onChange={(e) => {
            setAuthData({ ...authData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <ArrowButton content={buttonContent}/>
    </form>
  );
}

export default AuthForm;
