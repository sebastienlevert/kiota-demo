import * as React from 'react';
import { PageHeader } from '../components/PageHeader/PageHeader';

export const Home: React.FunctionComponent = () => {
  return (
    <PageHeader
      title={'Home'}
      description={'Suspendisse facilisis ultricies sapien, non tempus elit faucibus in.'}
    ></PageHeader>
  );
};
