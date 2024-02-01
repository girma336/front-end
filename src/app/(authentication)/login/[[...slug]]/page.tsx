"use client";

import React from "react";
import { LoginContainer, JuubixAppNames } from "@/shared";

const LoginPage: React.FC = () => (
  <LoginContainer appName={JuubixAppNames.MainApp} />
);

export default LoginPage;
