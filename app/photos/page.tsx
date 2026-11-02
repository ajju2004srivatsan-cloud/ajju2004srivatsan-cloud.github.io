import type { Metadata } from "next";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Reveal } from "@/components/Reveal";
import { photography, photos } from "@/content/site";

export const metadata: Metadata = {
  title: "Photos",
  description: "Photographs by Ajay Srivatsan R.",
};

export default function PhotosPage() {
  return (
    <Reveal>
      <p className="kicker">Photos</p>
      <h2 className="page-title">Photographs</h2>
      <p>{photography.line} Select one to open the larger frame.</p>
      {photos.length === 0 ? <p className="empty">{photography.empty}</p> : <PhotoGallery photos={photos} />}
    </Reveal>
  );
}
