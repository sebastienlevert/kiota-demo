import {Msdyn_bookingrule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_bookingruleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_bookingrule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_bookingrule();
}
