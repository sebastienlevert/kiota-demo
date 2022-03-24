import {Recurringappointmentmaster} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecurringappointmentmasterFromDiscriminatorValue(parseNode: ParseNode | undefined) : Recurringappointmentmaster {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Recurringappointmentmaster();
}
