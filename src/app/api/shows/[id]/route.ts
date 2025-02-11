import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const API_URL = process.env.API_URL;
  const { id } = params;

  try {
    const response = await fetch(`${API_URL}/api/shows/${id}?populate=*`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const shows = await response.json();
    return NextResponse.json(shows);
  } catch (error) {
    console.error("Error fetching show:", error);
    return NextResponse.json(
      { error: "Failed to fetch show details" },
      { status: 500 }
    );
  }
}
