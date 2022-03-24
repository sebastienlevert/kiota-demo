import {Msdyn_aibdatasetscontainer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_aibdatasetscontainerFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_aibdatasetscontainer {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_aibdatasetscontainer();
}
