import React from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type {WrapperProps} from '@docusaurus/types';
import {SettingsProvider} from '@site/src/contexts/SettingsContext';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <SettingsProvider>
      <Layout {...props} />
    </SettingsProvider>
  );
}
