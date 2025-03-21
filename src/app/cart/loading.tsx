import { Skeleton } from "@/components/ui/skeleton";

export default function CartLoading() {
  return (
    <main className="min-h-screen container mx-auto flex flex-col items-center space-y-10 py-10">
      <h2 className="text-3xl font-bold py-10">Cart</h2>
      <div className="w-full flex items-center gap-8">
        <Skeleton className="h-80 flex-1 " />
        <Skeleton className="h-80 w-96" />
      </div>
    </main>
  );
}
