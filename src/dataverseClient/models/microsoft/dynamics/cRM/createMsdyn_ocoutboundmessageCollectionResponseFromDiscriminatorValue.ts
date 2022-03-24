import {Msdyn_ocoutboundmessageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocoutboundmessageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocoutboundmessageCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocoutboundmessageCollectionResponse();
}
