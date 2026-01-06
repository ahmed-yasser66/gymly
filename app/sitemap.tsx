// app/sitemap.ts
export default async function sitemap() {
  const res = await fetch(
    "https://exercisedb.p.rapidapi.com/exercises?limit=10",
    {
      headers: {
        "x-rapidapi-key": process.env.API_KEY as string,
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
      cache: "no-store",
    },
  );
  const data = await res.json();

  const routes = ["", "/about", "/contact-us", "/exercises"].map((route) => ({
    url: `https://gymly-one.vercel.app${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blog = data.map((ex: any) => ({
    url: `https://gymly-one.vercel.app/exercises/${ex.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...routes, ...blog];
}
