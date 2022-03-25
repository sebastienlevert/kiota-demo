import * as React from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { useGraphToolkit } from '../../../hooks/useGraphToolkit';
import { List } from '../../../mgt/MgtList';
import { IColumn, SelectionMode, Selection } from '@fluentui/react';
import { useState } from 'react';

export const Teams: React.FunctionComponent = () => {
  const { isSignedIn } = useGraphToolkit();
  const [selectedItemsCount, setSelectedItemsCount] = useState<number>(0);

  function _onRenderItemColumn(item: any, index: number, column: IColumn) {
    const fieldContent = item[column.fieldName as keyof any] as any;

    switch (column.key) {
      default:
        return <span>Custom : {fieldContent}</span>;
    }
  }

  function _onSelectionChanged(selection: Selection) {
    const selectedCount = selection.getSelectedCount();
    setSelectedItemsCount(selectedCount);
    console.log(selectedCount);
  }

  return (
    <>
      <PageHeader title={'Joined Teams'} description={'View all your joined Teams'}></PageHeader>

      <div>
        {isSignedIn && (
          <>
            <List
              resource="/me/joinedTeams?$select=id,displayName,description"
              scopes={['User.Read.All']}
              selectionMode={SelectionMode.single}
              onRenderItemColumn={_onRenderItemColumn}
              onSelectionChanged={_onSelectionChanged}
            ></List>
          </>
        )}
      </div>
    </>
  );
};
