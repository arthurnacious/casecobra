import { providerMap } from "@/lib/auth";
import { signIn } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const SignInForm = () => {
  return (
    <div>
      <h2 className=" text-5xl font-bold mb-5 text-center text-slate-800">
        SIGN IN
      </h2>
      <p className="text-center mb-5 text-slate-600">
        By Continuing, you are seting up an account with casecobra and agree to
        our User Agreement and Private Policy.
      </p>
      <div className="flex items-center justify-center">
        {Object.values(providerMap).map((provider) => (
          <form
            key={provider.id}
            action={async () => {
              "use server";
              await signIn(provider.id);
            }}
          >
            <Button className="bg-black hover:bg-slate-800 gap-x-2">
              <GitHubLogoIcon className="h-4 w-4 " />
              <span>Sign in with {provider.name}</span>
            </Button>
          </form>
        ))}
      </div>
    </div>
  );
};

export default SignInForm;
