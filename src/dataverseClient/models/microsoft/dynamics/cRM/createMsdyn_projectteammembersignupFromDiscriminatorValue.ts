import {Msdyn_projectteammembersignup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_projectteammembersignupFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_projectteammembersignup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_projectteammembersignup();
}
