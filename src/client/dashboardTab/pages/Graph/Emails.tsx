import * as React from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { useGraphToolkit } from '../../../hooks/useGraphToolkit';
import { List } from '../../../mgt/MgtList';

export const Emails: React.FunctionComponent = () => {
  const { isSignedIn } = useGraphToolkit();

  return (
    <>
      <PageHeader title={'Emails'} description={'The list of your messages in your Inbox folder.'}></PageHeader>

      <div>
        {isSignedIn && (
          <List resource="/me/mailFolders/Inbox/messages?$select=subject,receivedDateTime&$filter=subject eq 'You have late tasks!'"></List>
        )}
      </div>
    </>
  );
};
