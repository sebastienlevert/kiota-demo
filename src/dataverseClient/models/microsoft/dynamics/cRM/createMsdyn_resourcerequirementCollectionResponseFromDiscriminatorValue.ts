import {Msdyn_resourcerequirementCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_resourcerequirementCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_resourcerequirementCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_resourcerequirementCollectionResponse();
}
