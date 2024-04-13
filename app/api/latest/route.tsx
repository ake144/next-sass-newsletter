import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/utils/db';
import { posts } from '@/utils/type';



export  async function GET(req: NextRequest) {
  try {
    const data: posts[] = await prisma.posts.findMany();
    console.log(data)
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching resources:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch resources',
    });
  }
}

