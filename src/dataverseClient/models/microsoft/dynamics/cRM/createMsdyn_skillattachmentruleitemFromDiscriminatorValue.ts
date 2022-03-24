import {Msdyn_skillattachmentruleitem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_skillattachmentruleitemFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_skillattachmentruleitem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_skillattachmentruleitem();
}
