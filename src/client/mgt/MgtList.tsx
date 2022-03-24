import * as React from 'react';

import {
  DetailsListLayoutMode,
  SelectionMode,
  ShimmeredDetailsList,
  IListProps
} from '@fluentui/react';
import { buildColumns } from '../dashboardTab/helpers/buildColumns';
import { useMicrosoftGraph } from '../hooks/useMicrosoftGraph';
import { Get, GetProps, MgtTemplateProps } from '@microsoft/mgt-react';

const shimmeredDetailsListProps: IListProps = {
  renderedWindowsAhead: 0,
  renderedWindowsBehind: 0,
};

export interface ListProps extends GetProps {
  exlusions?: string;
}

export const List: React.FunctionComponent<GetProps> = (props: GetProps) => {
  const [{ isSignedIn }] = useMicrosoftGraph();

  return (
    <>
        {isSignedIn && (
            <Get {...props}>
                <ListComponent template="default"></ListComponent>
            </Get>
            
        )}
    </>
  );
};

function ListComponent(props: MgtTemplateProps) {
    const { value } = props.dataContext;
    return (
        <ShimmeredDetailsList
            items={value || []}
            columns={buildColumns(value!)}
            layoutMode={DetailsListLayoutMode.justified}
            selectionMode={SelectionMode.none}
            enableShimmer={!value}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            listProps={shimmeredDetailsListProps}
            />
    )
  }