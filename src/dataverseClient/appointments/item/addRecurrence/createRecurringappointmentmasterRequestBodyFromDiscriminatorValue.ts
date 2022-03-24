import {RecurringappointmentmasterRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecurringappointmentmasterRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecurringappointmentmasterRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecurringappointmentmasterRequestBody();
}
