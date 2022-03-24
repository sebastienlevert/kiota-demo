import {Msdyn_ocsessionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocsessionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocsessionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocsessionCollectionResponse();
}
