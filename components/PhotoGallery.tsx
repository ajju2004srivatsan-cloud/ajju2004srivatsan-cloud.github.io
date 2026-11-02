"use client";

import { useEffect, useRef, useState } from "react";
import type { Photo } from "@/content/site";
import { withBase } from "@/lib/paths";

export function PhotoGallery({ photos, layout = "grid" }: { photos: Photo[]; layout?: "grid" | "film" }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState<Photo | null>(null);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (current && !element.open) element.showModal();
    if (!current && element.open) element.close();
  }, [current]);

  return (
    <>
      <div className={layout === "film" ? "film" : "gallery"}>
        {photos.map((photo, index) => (
          <figure key={photo.src}>
            <button type="button" aria-label={photo.caption} onClick={() => setCurrent(photo)}>
              <img
                src={withBase(photo.thumb)}
                alt={photo.alt}
                width={photo.thumbWidth}
                height={photo.thumbHeight}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </button>
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="viewer"
        onClose={() => setCurrent(null)}
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current?.close();
        }}
      >
        {current ? (
          <img src={withBase(current.src)} alt={current.alt} width={current.width} height={current.height} />
        ) : null}
      </dialog>
    </>
  );
}
