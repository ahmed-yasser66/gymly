// app/robots.ts
export default function robots() {
  const base = "https://gymly-one.vercel.app";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}
