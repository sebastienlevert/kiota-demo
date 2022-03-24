import {Msdyn_macrosession} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_macrosessionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_macrosession {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_macrosession();
}
