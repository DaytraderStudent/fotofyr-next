"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  return (
    <>
      <section className="pb-24 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="break-inside-avoid group cursor-pointer overflow-hidden"
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!lightbox} onOpenChange={() => setLightbox(null)}>
        <DialogContent className="max-w-5xl bg-[#0e0d0b] border-white/5 p-2 sm:p-4">
          <DialogTitle className="sr-only">
            {lightbox?.alt ?? "Bilde"}
          </DialogTitle>
          {lightbox && (
            <img
              src={lightbox.src.replace("w=1200", "w=1800")}
              alt={lightbox.alt}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
