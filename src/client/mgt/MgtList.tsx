import * as React from 'react';

import { SelectionMode, IColumn, Selection, DetailsList } from '@fluentui/react';
import { buildColumns } from './buildColumns';
import { useGraphToolkit } from '../hooks/useGraphToolkit';
import { Get, GetProps, MgtTemplateProps } from '@microsoft/mgt-react';
import { useState } from 'react';

export interface ListProps extends GetProps {
  exlusions?: string;
  selectionMode?: SelectionMode;
  columns?: IColumn[];
  onRenderItemColumn?: (item?: any, index?: number, column?: IColumn) => React.ReactNode;
  onSelectionChanged?: (selection?: Selection) => void;
  onColumnClick?: (_event: React.MouseEvent<HTMLElement>, column: IColumn) => void;
}

export interface MgtListTemplateProps extends MgtTemplateProps {
  exlusions?: string;
  selectionMode?: SelectionMode;
  columns?: IColumn[];
  onRenderItemColumn?: (item?: any, index?: number, column?: IColumn) => React.ReactNode;
  onSelectionChanged?: (selection?: Selection) => void;
  onColumnClick?: (_event: React.MouseEvent<HTMLElement>, column: IColumn) => void;
}

export const List: React.FunctionComponent<ListProps> = (props: ListProps) => {
  const { isSignedIn } = useGraphToolkit();

  return (
    <>
      {isSignedIn && (
        <Get {...props}>
          <ListComponent
            template="default"
            columns={props.columns}
            selectionMode={props.selectionMode}
            onRenderItemColumn={props.onRenderItemColumn}
            onSelectionChanged={props.onSelectionChanged}
          ></ListComponent>
        </Get>
      )}
    </>
  );
};

function ListComponent(props: MgtListTemplateProps) {
  const { value } = props.dataContext;
  const [items] = useState(value);
  const [columns] = useState(props.columns ? props.columns : buildColumns(items));

  const selection = new Selection({
    onSelectionChanged: () => {
      if (props.onSelectionChanged) {
        props.onSelectionChanged(selection);
      }
    }
  });

  return (
    <DetailsList
      items={items || []}
      columns={columns}
      selectionMode={props.selectionMode ? props.selectionMode : SelectionMode.none}
      selection={selection}
      ariaLabelForSelectionColumn="Toggle selection"
      ariaLabelForSelectAllCheckbox="Toggle selection for all items"
      onRenderItemColumn={props.onRenderItemColumn}
    />
  );
}
