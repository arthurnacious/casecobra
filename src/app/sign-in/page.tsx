import MaxWidthWrapper from "@/components/max-width-wrapper";
import SignInForm from "@/components/sign-in-form";
import { buttonVariants } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth();
  if (session) {
    redirect("/");
  }

  return (
    <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
      <div className="col-span-2 px-6">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost", className: "self-start" })
          )}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Home
        </Link>
        <div className="flex items-center justify-center">
          <SignInForm />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
