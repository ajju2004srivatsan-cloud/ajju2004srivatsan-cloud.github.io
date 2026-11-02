import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { photography, photos } from "@/content/site";
import { withBase } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Photos",
  description: "Photographs by Ajay Srivatsan R.",
};

export default function PhotosPage() {
  return (
    <Reveal>
      <p className="kicker">Photos</p>
      <h2 className="page-title">Photographs</h2>
      <p>{photography.line}</p>
      {photos.length === 0 ? (
        <p className="empty">{photography.empty}</p>
      ) : (
        <div className="gallery">
          {photos.map((photo) => (
            <figure key={photo.src}>
              <img src={withBase(photo.src)} alt={photo.alt} />
              {photo.caption ? <figcaption>{photo.caption}</figcaption> : null}
            </figure>
          ))}
        </div>
      )}
    </Reveal>
  );
}
