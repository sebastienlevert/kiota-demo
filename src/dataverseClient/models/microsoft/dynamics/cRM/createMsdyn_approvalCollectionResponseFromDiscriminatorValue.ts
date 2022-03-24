import {Msdyn_approvalCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_approvalCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_approvalCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_approvalCollectionResponse();
}
