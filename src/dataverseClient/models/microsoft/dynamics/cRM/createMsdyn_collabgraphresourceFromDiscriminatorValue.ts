import {Msdyn_collabgraphresource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_collabgraphresourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_collabgraphresource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_collabgraphresource();
}
