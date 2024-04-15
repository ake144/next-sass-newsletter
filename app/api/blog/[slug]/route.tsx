import prisma from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
): Promise<NextResponse> {
  try {
    const slug = params.slug;
    console.log(slug)
  console.log(params)

   const post = await prisma.latest.findFirst({
  where: { 
    title :slug
  }
})


    if (!post) {
      return NextResponse.json({ success: false, error: "Post not found" });
    }

    return NextResponse.json({ success: true, data: { post } });
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch post",
    });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { title: string } }
): Promise<NextResponse> {
  try {
    const { title } = params;

    const post = await prisma.latest.findUnique({
      where: { title },
    });

    if (!post) {
      return NextResponse.json({ success: false, error: "Post not found" });
    }

    const deletedPost = await prisma.latest.delete({
      where: { title }, // Deleting based on the title
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
