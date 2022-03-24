import { DetailsListLayoutMode, IColumn, SelectionMode, ShimmeredDetailsList } from '@fluentui/react';
import { Person, PersonCardInteraction, ViewType } from '@microsoft/mgt-react';
import * as React from 'react';
import { useEffect } from 'react';
import { DataverseClient } from '../../../dataverseClient/dataverseClient';
import { Appointment, Opportunity } from '../../../dataverseClient/models/microsoft/dynamics/cRM';
import { useDataverse } from '../../hooks/useDataverse';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { buildColumns } from '../helpers/buildColumns';

export const Appointments: React.FunctionComponent = () => {  
  const [{ isSignedIn, client }] = useDataverse();
  const [appointments, setAppointments] = React.useState<Appointment[] | undefined>(undefined);
  
  useEffect(() => {
    if(isSignedIn) {
      fetchData(client);
    }    
  }, [isSignedIn]);

  const columns: IColumn[] = [
    {
      key: 'id',
      fieldName: 'activityid',
      name: 'Identifier',
      minWidth: 300,
      maxWidth: 300,
    },
    {
      key: 'subject',
      fieldName: 'subject',
      name: 'Subject',
      minWidth: 300,
      maxWidth: 300,
    },
    {
      key: 'owninguser',
      fieldName: 'owninguser',
      name: 'User',
      minWidth: 300,
      maxWidth: 300,
    }
  ];

  
  const fetchData = async (client: DataverseClient) => {
    const data = await client.appointments.get({
      top: 10,
      select: ["subject", "activityid"],
      expand: ["owninguser"]
    });
    setAppointments(data?.value);
  }

  function _renderItemColumn(item: any, index: number, column: IColumn) {
    const fieldContent = item[column.fieldName as keyof any] as any;
  
    switch (column.key) {
      case 'owninguser':
        return <Person userId={fieldContent.azureactivedirectoryobjectid} view={ViewType.twolines} personCardInteraction={PersonCardInteraction.hover}></Person>;
    
      default:
        return <span>{fieldContent}</span>;
    }
  }

  return (
    <>
      <PageHeader title={'Appointments'} description={'Appointments.'}></PageHeader>

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
          */
          }
      <div>
        {isSignedIn && (
          <>
            <ShimmeredDetailsList
              items={appointments || []}
              columns={columns}
              layoutMode={DetailsListLayoutMode.justified}
              onRenderItemColumn={_renderItemColumn}
              selectionMode={SelectionMode.none}
              enableShimmer={!appointments}
              ariaLabelForSelectionColumn="Toggle selection"
              ariaLabelForSelectAllCheckbox="Toggle selection for all items"
              />
          </>
        )}
      </div>
    </>
  );
};
