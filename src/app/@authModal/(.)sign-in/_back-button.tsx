"use client";
import { Button } from "@/components/ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button variant="ghost" onClick={() => router.back()}>
      <Cross2Icon className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </Button>
  );
};

export default BackButton;
