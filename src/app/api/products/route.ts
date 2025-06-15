import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const search = searchParams.get('search') || '';
  const limit = searchParams.get('limit') || '20';

  const res = await fetch(
    `${process.env.API_URL}/products?search=${search}&limit=${limit}`,
    {
      headers: {
        'x-api-key': process.env.API_KEY!,
      },
    }
  );

  const data = await res.json();
  return NextResponse.json(data);
}
