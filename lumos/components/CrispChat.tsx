"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("fd436b8e-de78-4041-a379-d12e83e56a59");
  }, []);
  return null;
};

export default CrispChat;
