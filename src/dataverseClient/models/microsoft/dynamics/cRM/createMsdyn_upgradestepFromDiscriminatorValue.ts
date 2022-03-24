import {Msdyn_upgradestep} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_upgradestepFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_upgradestep {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_upgradestep();
}
