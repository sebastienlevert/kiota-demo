import * as React from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { useMicrosoftGraph } from '../../../hooks/useMicrosoftGraph';
import { List } from '../../../mgt/MgtList';

export const Emails: React.FunctionComponent = () => {
  const [{ isSignedIn }] = useMicrosoftGraph();

  return (
    <>
      <PageHeader
        title={'Emails'}
        description={'The list of your messages in your Inbox folder.'}
      ></PageHeader>

      <div>
        {isSignedIn && (
          <List resource="/me/mailFolders/Inbox/messages?$select=subject,receivedDateTime&$filter=subject eq 'You have late tasks!'"></List>
        )}
      </div>
    </>
  );
};
