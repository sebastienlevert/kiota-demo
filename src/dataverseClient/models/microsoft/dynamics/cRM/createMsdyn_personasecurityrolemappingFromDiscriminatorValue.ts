import {Msdyn_personasecurityrolemapping} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_personasecurityrolemappingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_personasecurityrolemapping {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_personasecurityrolemapping();
}
