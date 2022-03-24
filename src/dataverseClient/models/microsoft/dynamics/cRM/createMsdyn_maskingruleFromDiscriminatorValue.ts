import {Msdyn_maskingrule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_maskingruleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_maskingrule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_maskingrule();
}
