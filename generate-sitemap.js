const axios = require("axios");
const fs = require("fs");
const path = require("path");

const API_URL =
  "https://cms.forexblues.com/json/api/get-news-slug.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s"; // Replace this with your actual API URL
const SITE_URL = "https://forexblues.com";

async function getArticles() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error.message);
    return [];
  }
}

async function generateSitemap() {
  const articles = await getArticles();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  ${articles
    .map(
      (article) => `<url>
    <loc>${SITE_URL}/article/${article.slug}</loc>
    <lastmod>${article.lastModified}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("\n")}
</urlset>`;

  const sitemapPath = path.join(__dirname, "public", "sitemap-0.xml");
  fs.writeFileSync(sitemapPath, sitemap);

  console.log("Sitemap generated successfully.");
}

generateSitemap();
