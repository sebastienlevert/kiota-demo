import {Msdyn_resourcecategorymarkuppricelevel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_resourcecategorymarkuppricelevelFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_resourcecategorymarkuppricelevel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_resourcecategorymarkuppricelevel();
}
