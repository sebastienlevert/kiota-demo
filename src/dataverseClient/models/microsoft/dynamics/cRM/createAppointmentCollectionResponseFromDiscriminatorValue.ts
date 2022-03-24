import {AppointmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppointmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppointmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppointmentCollectionResponse();
}
