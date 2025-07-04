import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

Hi there! I'm **Sixian**, and I'm genuinely flattered you're curious enough to land on this page—whether you're here by accident, divine intervention, or just very, very bored. In any case: **welcome!** 👋

I come from a cozy little town tucked away in **southwest China**, but my love for all things **anime** pulled me across the ocean to **Japan**, where I earned a master’s degree in **computer science** (a fancy way of saying I now stare at a screen professionally). These days, I live in **Tokyo**, coding away at a job that's more “Excel” than “exhilarating,” but hey—it pays the bills and funds the gacha rolls.

Think of this blog less like a “blog” and more like my personal corner of the internet. A little chaotic, a little impulsive, maybe even occasionally insightful—kind of like [Twitter](https://twitter.com), but with better typography. 😎

My journey into the anime rabbit hole officially began in **2011** with *Aria the Scarlet Ammo*—yes, that *Aria*. Since becoming a **full-fledged otaku**, I've watched countless shows (and dropped a few), but even now, I still catch new anime when they spark my curiosity.

🎮 When I’m not working or rewatching the same fight scene five times, I’m probably playing **mobile games**. Currently obsessed with **Genshin Impact**, occasionally dabbling in **Honkai: Star Rail**, and reminiscing about the six long years I gave to **Fate/Grand Order** before finally escaping the gacha clutches. Other past obsessions include: *Blue Archive*, *Idolmaster Cinderella Girls: Starlight Stage*, *Azur Lane*, *Princess Connect Re:Dive*, *BanG Dream!*, and more. Basically, if it has waifus and events, I've probably installed it at some point.

🕹 I also enjoy **PC games** on **Steam**—in 2024 I played *Black Myth: Wukong*, *Sons of the Forest*, and *Mita*. I *used to* be into **galgames**, and though I don’t play many nowadays, *Baldr Sky* still haunts my heart (in a good way).

But hey, I'm not just a shut-in with RGB lighting. I love **offline events** too! The last convention I went to was *Wonder Festival Shanghai 2024*, and my most recent live was **Roselia’s「Sei stark」**—and let me tell you, being surrounded by people who love what you love? There's nothing quite like it.

✈️ Outside of my two-dimensional life, I’m also an avid **traveler**. Over the past year, I’ve wandered through **Kobe**, **Hiroshima**, **Chengdu**, **Leshan**, **Yibin**, and **Numazu**, often driving through Japan’s scenic countryside just to chase a feeling I can’t quite describe.

---

**人生就是一场旅途** — life is a journey. And if the scenery along the way isn’t worth remembering, then what’s the point of the destination? This blog is my way of recording those fleeting moments—the pixels, the people, the places.

Thanks for stopping by. Hope you stick around 💫

Love,

Sixian`;

![icon](/images/IMG_6877.GIF)


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
