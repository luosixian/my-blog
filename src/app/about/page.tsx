import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

![icon](/images/IMG_6877.GIF)

一个永远在路上的人

Love,

Sixian`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Sixian",
    openGraph: {
      title: "About Me",
      description: "Learn more about Sixian",
      images: [
        signOgImageUrl({
          title: "Sixian",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
