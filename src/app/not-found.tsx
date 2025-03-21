import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-6">
      <h2 className="text-3xl font-bold">Error 404</h2>
      <p>Product Not Found</p>
      <a href="/" className={cn(buttonVariants())}>
        Back To Home Page
      </a>
    </div>
  );
}
