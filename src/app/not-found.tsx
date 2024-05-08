import MaxWidthWrapper from "@/components/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <MaxWidthWrapper className="pb-24 mt-[20%]">
      <div className="flex justify-center items-center h-full">
        <div className="text-center">
          <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
            404
          </p>
          <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
            Page Not Found
          </p>
          <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
            Sorry, the page you are looking for could not be found.
          </p>
          <Link
            href="/"
            className={buttonVariants({
              variant: "default",
              className: "gap-x-1 mt-5",
            })}
            title="Return Home"
          >
            <Home className="h-3 w-3" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
