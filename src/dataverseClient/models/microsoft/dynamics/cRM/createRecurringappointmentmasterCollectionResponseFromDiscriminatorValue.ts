import {RecurringappointmentmasterCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecurringappointmentmasterCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecurringappointmentmasterCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecurringappointmentmasterCollectionResponse();
}
