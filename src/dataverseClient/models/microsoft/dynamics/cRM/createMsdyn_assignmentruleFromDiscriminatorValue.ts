import {Msdyn_assignmentrule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_assignmentruleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_assignmentrule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_assignmentrule();
}
