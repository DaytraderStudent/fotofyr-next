"use client";

export default function BlogArticle({ content }: { content: string }) {
  // Simple markdown-ish to HTML
  const html = content
    .trim()
    .split("\n\n")
    .map((block) => {
      block = block.trim();
      if (block.startsWith("### ")) {
        return `<h3>${block.slice(4)}</h3>`;
      }
      if (block.startsWith("## ")) {
        return `<h2>${block.slice(3)}</h2>`;
      }
      if (block.startsWith("**") && block.endsWith("**")) {
        return `<p><strong>${block.slice(2, -2)}</strong></p>`;
      }
      // Bold within paragraph
      const withBold = block.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      return `<p>${withBold}</p>`;
    })
    .join("\n");

  return (
    <div
      className="prose-custom"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
