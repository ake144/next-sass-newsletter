import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <>
     <Skeleton className="h-10 w-10" />
    <div className="flex flex-col space-y-3 justify-center items-center">
      <Skeleton className="h-[50px] w-[500px]" />
      <Skeleton className="h-[225px] w-[500px] rounded-xl" />
      <div className="space-y-1">
        <Skeleton className="h-[30px] w-[500px]" />
        <Skeleton className="h-[30px] w-[500px]" />
        <Skeleton className="h-[30px] w-[500px]" />
      </div>
    </div>
    </>
  )
}
