import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // تم تعطيل Cache Components: الموقع يعتمد على قراءة كوكي اللغة في كل صفحة
  // (عبر Header/Footer)، وهذا يتطلب عرضاً ديناميكياً لكل الصفحات بطبيعته —
  // وهو ما يتعارض مع تحسينات الـPrerendering التجريبية لهذه الميزة.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
