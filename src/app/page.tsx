import styles from "@styles/page.module.css";
import Socials from "@app/components/Footer/Socials";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Anthony Nguyen</h1>
        <h3>
          I&apos;m a full-stack developer and I like to build cool things.
        </h3>
        {/* <p>
          I’m a full-stack developer passionate about tackling challenges and
          crafting experiences that blend creativity with technical precision.
          Whether it’s designing intuitive user interfaces, implementing complex
          algorithms, or building seamless integrations, I’m driven by a love
          for problem-solving and creating efficient, valuable solutions.
        </p>
        <p>
          Currently, I’m interning at Sharefluence, a tech startup where I’ve
          integrated the Facebook API to collect and visualize user social
          metrics through dynamic charts. I’ve also contributed to building a
          CRM platform for Midnite Marketing Agency, helping them streamline
          their operations with a Notion-based system.
        </p>
        <p>
          My journey so far includes coding projects for marketing agencies,
          working on social media API integrations, and continuously honing my
          skills in both front-end and back-end development. I thrive on
          opportunities to learn, innovate, and push boundaries—whether that’s
          through perfecting animations or tackling nitty-gritty algorithms.
        </p>
        <p>
          Outside of coding, you’ll often find me immersed in a good book,
          exploring new anime series, or enjoying a game of pickleball. Looking
          ahead, I’m excited to dive deeper into AI and cryptocurrency
          development, blending my technical expertise with emerging
          technologies to create impactful solutions.
        </p> */}
        <Socials />
      </main>
      <footer className={styles.footer}>
        &copy; 2024 AVQN. All rights reserved.
      </footer>
    </div>
  );
}
