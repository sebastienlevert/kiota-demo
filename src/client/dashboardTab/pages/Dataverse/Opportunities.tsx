import { DetailsList, DetailsListLayoutMode, IColumn, SelectionMode, ShimmeredDetailsList } from '@fluentui/react';
import * as React from 'react';
import { useEffect } from 'react';
import { DataverseClient } from '../../../../dataverseClient/dataverseClient';
import { Opportunity } from '../../../../dataverseClient/models/microsoft/dynamics/cRM';
import { useDataverse } from '../../../hooks/useDataverse';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { buildColumns } from '../../../mgt/buildColumns';
import { useGraphToolkit } from '../../../hooks/useGraphToolkit';
import { Person, PersonCardInteraction, ViewType } from '@microsoft/mgt-react';

export const Opportunities: React.FunctionComponent = () => {
  const { isSignedIn } = useGraphToolkit();
  const dataverseClient = useDataverse();
  const [opportunities, setOpportunities] = React.useState<Opportunity[] | undefined>(undefined);

  useEffect(() => {
    if (dataverseClient && isSignedIn) {
      fetchOpportunities(dataverseClient);
    }
  }, [dataverseClient, isSignedIn]);

  const fetchOpportunities = async (client: DataverseClient) => {
    const data = await client.opportunities.get({
      top: 10,
      select: ['name, opportunityid'],
      expand: ['owninguser']
    });
    setOpportunities(data?.value);
  };

  const columns: IColumn[] = [
    {
      key: 'id',
      fieldName: 'opportunityid',
      name: 'Identifier',
      minWidth: 300,
      maxWidth: 300
    },
    {
      key: 'name',
      fieldName: 'name',
      name: 'Name',
      minWidth: 200
    },
    {
      key: 'owninguser',
      fieldName: 'owninguser',
      name: 'User',
      minWidth: 300,
      maxWidth: 300
    }
  ];

  function _onRenderItemColumn(item: any, index: number, column: IColumn) {
    const fieldContent = item[column.fieldName as keyof any] as any;

    switch (column.key) {
      case 'owninguser':
        return (
          <Person
            userId={fieldContent.azureactivedirectoryobjectid}
            view={ViewType.oneline}
            personCardInteraction={PersonCardInteraction.hover}
          ></Person>
        );

      default:
        return <span>{fieldContent}</span>;
    }
  }

  function _onItemInvoked(item: any) {
    window.open(
      `${process.env.DATAVERSE_URL}/main.aspx?app=d365default&forceUCI=1&pagetype=entityrecord&etn=opportunity&id=${item.opportunityid}`,
      '_blank'
    );
  }

  return (
    <>
      <PageHeader title={'Opportunities'} description={'Opportunities.'}></PageHeader>
      <div>
        {isSignedIn && (
          <>
            <DetailsList
              items={opportunities || []}
              columns={columns}
              layoutMode={DetailsListLayoutMode.justified}
              selectionMode={SelectionMode.none}
              onRenderItemColumn={_onRenderItemColumn}
              onItemInvoked={_onItemInvoked}
              ariaLabelForSelectionColumn="Toggle selection"
              ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            />
          </>
        )}
      </div>
    </>
  );
};
