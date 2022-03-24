import {Msdyn_playbookinstanceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_playbookinstanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_playbookinstanceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_playbookinstanceCollectionResponse();
}
