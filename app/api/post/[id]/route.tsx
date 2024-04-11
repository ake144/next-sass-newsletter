import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: number } }
) {
  try {
    const { slug } = params;
    const data = await prisma.blog.findFirst({
      where: { id: { equals: slug } },
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching resources:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch resources",
    });
  }
}


export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: number } }
): Promise<NextResponse> {
  try {
    const { id } = params;
    const deletedPost = await prisma.blog.delete({
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


 