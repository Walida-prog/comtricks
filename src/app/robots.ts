export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://comtricks.vercel.app/sitemap.xml',
  }
}