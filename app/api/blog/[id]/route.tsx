
import prisma  from "@/utils/db";
// import { LatestBlog } from "@/utils/type";
import { error } from "console";
import { NextResponse,NextRequest } from "next/server";



export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = params.id;
  const post = await prisma.latest.findUnique({
    where: { id: Number(id) },
  });

  if (!post) {
    return NextResponse.json({ success: false, error: "Post not found" });
  }


  return NextResponse.json({ success: true, data: { post } });
}





  

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: number } }
): Promise<NextResponse> {
  try {
    const { id } = params;
    
    const deletedPost = await prisma.latest.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, data: deletedPost });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to delete post",
    });
  }
}


 