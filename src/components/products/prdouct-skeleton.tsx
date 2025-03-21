"use client";
import React from "react";
import { Skeleton } from "../ui/skeleton";

export function ProductSkeleton() {
  return (
    <div className="flex flex-col space-y-2 group w-64">
      <Skeleton className="h-72 w-full" />
      <div className="flex flex-col space-y-1 p-2">
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Skeleton key={i} className="w-4 h-4 rounded-full" />
          ))}
        </div>
        <Skeleton className="h-6 w-32 rounded-md" />
        <Skeleton className="h-5 w-10 rounded-md" />
      </div>
    </div>
  );
}
