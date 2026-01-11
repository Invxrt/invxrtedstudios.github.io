import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{
      backgroundImage: 'url(/img/sudiosbanner.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    }}>
      <div className="container" style={{position: 'relative', zIndex: 1}}>
        <Heading as="h1" className="hero__title" style={{opacity: 0}}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{opacity: 0}}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function AboutMe() {
  return (
    <section style={{
      padding: '4rem 0',
      backgroundColor: 'var(--ifm-background-surface-color)',
      borderTop: '1px solid var(--ifm-color-emphasis-200)',
      borderBottom: '1px solid var(--ifm-color-emphasis-200)',
    }}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h2" style={{textAlign: 'center', marginBottom: '1.5rem'}}>
              About Me
            </Heading>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'center'}}>
              Hey! I'm Invxrt, a Minecraft modpack creator who loves building unique experiences
              around the End dimension and purple aesthetics. I specialize in creating modpacks
              that focus on Energy-Matter Curation (EMC) systems and progressive gameplay.
              While I don't create mods myself (Java gives me headaches!), I pour my creativity
              into crafting carefully balanced modpack experiences for the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Minecraft modpacks by Tyson - featuring EMC: To The Sky!, EMC: Space Age, and SubTerra Tech">
      <HomepageHeader />
      <main>
        <AboutMe />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
