import {Msdyn_upgraderun} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_upgraderunFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_upgraderun {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_upgraderun();
}
