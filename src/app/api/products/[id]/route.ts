import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  context: { params: Record<string, string> }
) {
  const { id } = context.params;

  const res = await fetch(`${process.env.API_URL}/products/${id}`, {
    headers: {
      'x-api-key': process.env.API_KEY ?? '',
    },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch product by id' },
      { status: res.status }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
