import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { signIn, auth, providerMap } from "@/lib/auth";
import { Github } from "lucide-react";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth();
  if (session) {
    redirect("/");
  }

  return (
    <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
      <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
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
                <Github className="h-4 w-4 " />
                <span>Sign in with {provider.name}</span>
              </Button>
            </form>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
