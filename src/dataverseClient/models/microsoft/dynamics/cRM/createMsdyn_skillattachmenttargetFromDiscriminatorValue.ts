import {Msdyn_skillattachmenttarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_skillattachmenttargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_skillattachmenttarget {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_skillattachmenttarget();
}
