import {Msdyn_workorderCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_workorderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_workorderCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_workorderCollectionResponse();
}
