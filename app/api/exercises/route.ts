export async function GET() {
  const exercises = await fetch(
    "https://exercisedb.p.rapidapi.com/exercises?limit=20",
    {
      headers: {
        "x-rapidapi-key": process.env.API_KEY as string,
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    },
  );
  const data = await exercises.json();
  return new Response(JSON.stringify(data));
}
