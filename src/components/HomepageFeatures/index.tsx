import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
  link?: string;
  buttonLabel?: string;
  curseforgeSlug?: string;
  modrinthSlug?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'EMC: To The Sky!',
    image: require('@site/static/img/emc-sky-icon.png').default,
    description: (
      <>
        A skyblock adventure modpack focused on expert mode crafting with Energy-Matter Curation.
        Build your island empire using EMC and automation!
      </>
    ),
    link: '/emc-to-the-sky/intro',
    buttonLabel: 'View Guide',
    curseforgeSlug: 'emc-to-the-sky',
  },
  {
    title: 'EMC: Space Age',
    image: require('@site/static/img/emc-space-icon.png').default,
    description: (
      <>
        Take your EMC journey to the stars! A space-themed modpack combining exploration,
        technology, and Energy-Matter Curation for an interstellar adventure.
      </>
    ),
    link: '/emc-space-age/intro',
    buttonLabel: 'View Guide',
    curseforgeSlug: 'spaceage',
  },
  {
    title: 'SubTerra Tech',
    image: require('@site/static/img/subterra-icon.png').default,
    description: (
      <>
        Dive deep into underground technological advancement. A tech-focused modpack
        centered around subterranean exploration and industrial development.
      </>
    ),
    link: '/subterra-tech/intro',
    buttonLabel: 'View Guide',
    curseforgeSlug: 'subterra-tech',
  },
];

function Feature({
  title,
  image,
  description,
  link,
  buttonLabel,
  curseforgeSlug,
}: FeatureItem) {
  const imageElement = (
    <div className="text--center">
      <img src={image} className={styles.featureImg} alt={title} />
    </div>
  );

  const content = (
    <>
      {link ? (
        <Link to={link} style={{textDecoration: 'none', color: 'inherit', display: 'block'}}>
          {imageElement}
        </Link>
      ) : (
        imageElement
      )}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <div style={{marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center'}}>
          {link && (
            <Link to={link} className="button button--primary button--md" style={{width: '100%', maxWidth: '200px'}}>
              {buttonLabel ?? 'View Guide'}
            </Link>
          )}
          {curseforgeSlug && (
            <div style={{fontSize: '0.9rem'}}>
              <a
                href={`https://www.curseforge.com/minecraft/modpacks/${curseforgeSlug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--secondary button--sm"
                style={{minWidth: '150px'}}
              >
                View on CurseForge
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <div className={clsx('col col--4')}>
      {content}
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
