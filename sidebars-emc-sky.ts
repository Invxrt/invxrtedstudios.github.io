import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  emcSkySidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'general-info',
      label: 'General Information',
    },
    {
      type: 'doc',
      id: 'tips',
      label: 'Tips & Tricks',
    },
    {
      type: 'doc',
      id: 'known-bugs',
      label: 'Known Bugs',
    },
    {
      type: 'doc',
      id: 'versions',
      label: 'Version History',
    },
  ],
};

export default sidebars;
