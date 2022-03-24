import {Msdyn_businessclosure} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_businessclosureFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_businessclosure {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_businessclosure();
}
