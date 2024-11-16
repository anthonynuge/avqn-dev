// import styles from "@styles/page.module.css";
import Socials from "@app/components/Footer/Socials";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Anthony Nguyen</h1>
        <h3>Full Stack Developer</h3>
        <p>
          I like to build cool stuff that is not only looks good but run good.
        </p>
        <Socials />
      </header>
      <main className={styles.main}>
        <p>
          I’m a full-stack developer who loves solving problems and creating
          efficient, impactful solutions. Whether it’s designing intuitive UIs,
          building integrations, or tackling algorithms, I thrive on challenges
          and learning.
        </p>
        <p>
          Currently, I’m interning at Sharefluence, where I’ve integrated the
          Facebook API to visualize social metrics and helped design a
          Notion-based CRM for Midnite Marketing Agency. My experience spans
          projects for marketing agencies and API integrations, constantly
          honing my front-end and back-end skills.
        </p>
        <p>
          When I’m not coding, I’m likely reading a good book, watching anime,
          or playing pickleball. I’m eager to dive deeper into AI and
          cryptocurrency, blending creativity with cutting-edge tech.
        </p>
      </main>
    </div>

    // <div className={styles.page}>
    //   <main className={styles.main}>
    //     <h1>Anthony Nguyen</h1>
    //     <h3>
    //       I&apos;m a full-stack developer and I like to build cool things.
    //     </h3>
    // <p>
    //   I’m a full-stack developer passionate about tackling challenges and
    //   crafting experiences that blend creativity with technical precision.
    //   Whether it’s designing intuitive user interfaces, implementing complex
    //   algorithms, or building seamless integrations, I’m driven by a love
    //   for problem-solving and creating efficient, valuable solutions.
    // </p>
    // <p>
    //   Currently, I’m interning at Sharefluence, a tech startup where I’ve
    //   integrated the Facebook API to collect and visualize user social
    //   metrics through dynamic charts. I’ve also contributed to building a
    //   CRM platform for Midnite Marketing Agency, helping them streamline
    //   their operations with a Notion-based system.
    // </p>
    // <p>
    //   My journey so far includes coding projects for marketing agencies,
    //   working on social media API integrations, and continuously honing my
    //   skills in both front-end and back-end development. I thrive on
    //   opportunities to learn, innovate, and push boundaries—whether that’s
    //   through perfecting animations or tackling nitty-gritty algorithms.
    // </p>
    // <p>
    //   Outside of coding, you’ll often find me immersed in a good book,
    //   exploring new anime series, or enjoying a game of pickleball. Looking
    //   ahead, I’m excited to dive deeper into AI and cryptocurrency
    //   development, blending my technical expertise with emerging
    //   technologies to create impactful solutions.
    // </p>
    //     <Socials />
    //   </main>

    // </div>
  );
}
