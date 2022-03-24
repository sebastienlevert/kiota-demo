import {Msdyn_ocautoblockrule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocautoblockruleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocautoblockrule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocautoblockrule();
}
