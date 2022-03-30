import * as React from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { useGraphToolkit } from '../../../hooks/useGraphToolkit';
import { List } from '../../../mgt/MgtList';
import { IColumn, SelectionMode } from '@fluentui/react';
import { Person, PersonCardInteraction, ViewType } from '@microsoft/mgt-react';

export const Users: React.FunctionComponent = () => {
  const { isSignedIn } = useGraphToolkit();

  const columns: IColumn[] = [
    {
      key: 'id',
      fieldName: 'id',
      name: 'User',
      minWidth: 300,
      maxWidth: 300
    },
    {
      key: 'displayName',
      fieldName: 'displayName',
      name: 'Name',
      minWidth: 200
    },
    {
      key: 'jobTitle',
      fieldName: 'jobTitle',
      name: 'Job Title',
      minWidth: 300,
      maxWidth: 300
    },
    {
      key: 'mail',
      fieldName: 'mail',
      name: 'Mail',
      minWidth: 300,
      maxWidth: 300
    }
  ];

  function _onRenderItemColumn(item: any, _index: number, column: IColumn) {
    const fieldContent = item[column.fieldName as keyof any] as any;

    switch (column.key) {
      case 'id':
        return (
          <Person userId={item.id} view={ViewType.oneline} personCardInteraction={PersonCardInteraction.hover}></Person>
        );
      default:
        return <span>{fieldContent}</span>;
    }
  }

  return (
    <>
      <PageHeader
        title={'Users'}
        description={'Use this page to manager the users available on your tenant.'}
      ></PageHeader>

      <div>
        {isSignedIn && (
          <>
            <List
              resource={`/users?$select=${columns.map(c => c.fieldName).join(',')}`}
              columns={columns}
              scopes={['User.Read.All']}
              selectionMode={SelectionMode.single}
              onRenderItemColumn={_onRenderItemColumn}
            ></List>
          </>
        )}
      </div>
    </>
  );
};
