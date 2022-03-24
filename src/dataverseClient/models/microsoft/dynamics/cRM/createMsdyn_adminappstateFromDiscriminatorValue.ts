import {Msdyn_adminappstate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_adminappstateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_adminappstate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_adminappstate();
}
