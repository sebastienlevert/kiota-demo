import {Msdyn_upgradeversion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_upgradeversionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_upgradeversion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_upgradeversion();
}
