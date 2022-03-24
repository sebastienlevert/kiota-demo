import {ServiceappointmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceappointmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceappointmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceappointmentCollectionResponse();
}
