import SignInForm from "@/components/sign-in-form";
import { Button } from "@/components/ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";
import React, { FC } from "react";
import BackButton from "./_back-button";
import BackBackdrop from "./_back-backdrop";

interface Props {}

const Page: FC<Props> = () => {
  return (
    <>
      <BackBackdrop />
      <div className="container flex items-center h-ful max-w-sm mx-auto">
        <div className="fixed left-[50%] top-[50%] z-[100] grid w-full max-w-sm translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
          <div className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <BackButton />
          </div>
          <div>
            <SignInForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
