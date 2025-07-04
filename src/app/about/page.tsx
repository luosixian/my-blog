import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

Hi! I'm Sixian. However you ended up on this page, I’m happy you did. Welcome! 

I come from a quiet little town tucked away in southwest China, but my passion for anime pulled me across the ocean to Japan, where I earned a master’s degree in computer science. These days, I live in Tokyo, working a job that isn’t always fun, but has its value.

Think of this blog less like a “blog” and more like my personal corner of the internet. A little chaotic, a little impulsive, maybe even occasionally insightful—kind of like Weibo/Twitter.

My journey into the anime rabbit hole officially began in **2011** with [緋弾のアリア](https://ja.wikipedia.org/wiki/%E7%B7%8B%E5%BC%BE%E3%81%AE%E3%82%A2%E3%83%AA%E3%82%A2). I've seen a lot of anime since I became an otaku. I don’t watch as much now, but I still follow new shows if they look interesting.

Outside of work and anime, I love mobile games. These days it’s mostly [Genshin impact](https://genshin.hoyoverse.com/en/) and a bit of [Star Rail](https://hsr.hoyoverse.com/en-us/). I used to be deep into FGO for six years before I finally quit. I’ve also tried games like Blue Archive, Idolmaster, Azur Lane, Princess Connect, and BanG Dream. 

I also enjoy PC game on Steam—in 2024 I played *Black Myth: Wukong*, *Sons of the Forest*, and *MiSide*. I *used to* be into galgames, and though I don’t play many nowadays, [BaldrSky](https://ja.wikipedia.org/wiki/BALDR_SKY) still haunts my heart (in a good way).

I love offline events too! The last convention I went to was [Wonder Festival Shanghai 2024](https://wonfes.jp/), and my most recent live was [Roselia’s「Sei stark」](https://bang-dream.com/events/roselia2025live)—and let me tell you, being surrounded by people who love what you love? There's nothing quite like it.

Outside of otaku life, I also enjoy **traveling**. Over the past year, I’ve wandered through Kobe, Hiroshima, Chengdu, Leshan, Yibin, and [**Numazu**](https://www.city.numazu.shizuoka.jp/). I like driving through the countryside in Japan, just to enjoy the feeling.

人生就是一场旅途 — life is a journey. And if the scenery along the way isn’t worth remembering, then what’s the point of the destination? This blog is my way of recording those little moments.

Thanks for stopping by. Wishing you a wonderful day.

Love,

Sixian

![icon](/images/IMG_6877.GIF)

`;




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
