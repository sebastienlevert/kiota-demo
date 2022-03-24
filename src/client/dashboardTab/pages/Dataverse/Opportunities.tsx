import { DetailsListLayoutMode, IColumn, SelectionMode, ShimmeredDetailsList } from '@fluentui/react';
import * as React from 'react';
import { useEffect } from 'react';
import { DataverseClient } from '../../../../dataverseClient/dataverseClient';
import { Opportunity } from '../../../../dataverseClient/models/microsoft/dynamics/cRM';
import { useDataverse } from '../../../hooks/useDataverse';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { buildColumns } from '../../../mgt/buildColumns';
import { useGraphToolkit } from '../../../hooks/useGraphToolkit';

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
      select: ['name, opportunityid']
    });
    setOpportunities(data?.value);
    console.log(data?.value![0]?.name);
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
      minWidth: 200,
      maxWidth: 200
    }
  ];

  return (
    <>
      <PageHeader title={'Opportunities'} description={'Opportunities.'}></PageHeader>

      {/*<List resource='/users'></List>
          <ShimmeredDetailsList
            items={users || []}
            columns={buildColumns(usersJson!)}
            layoutMode={DetailsListLayoutMode.justified}
            selectionMode={SelectionMode.none}
            enableShimmer={!users}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            />
          
            
            {opportunities?.map((opp) => (
              <div key={opp.opportunityid}>{opp.name}</div>
            ))}
          */}
      <div>
        {isSignedIn && (
          <>
            <ShimmeredDetailsList
              items={opportunities || []}
              columns={columns}
              layoutMode={DetailsListLayoutMode.justified}
              selectionMode={SelectionMode.none}
              enableShimmer={!opportunities}
              ariaLabelForSelectionColumn="Toggle selection"
              ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            />
          </>
        )}
      </div>
    </>
  );
};
