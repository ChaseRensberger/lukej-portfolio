import Contact from "@/components/Contact";
import ContentSection from "@/components/ContentSection";

export default function Home() {
  return (
    <main className="bg-black">
      <ContentSection
        videoUrlHorizontal="/About_FINAL.mp4"
        videoUrlVertical="/About_vert.mp4"
      />
      <ContentSection
        videoUrlHorizontal="/Design_FINAL.mp4"
        videoUrlVertical="/Design_vert.mp4"
      />
      <ContentSection
        videoUrlHorizontal="/Film_FINAL.mp4"
        videoUrlVertical="/Film_vert.mp4"
      />
      <ContentSection
        videoUrlHorizontal="/Audio_FINAL.mp4"
        videoUrlVertical="/Audio_vert.mp4"
      />
      <Contact />
    </main>
  );
}
