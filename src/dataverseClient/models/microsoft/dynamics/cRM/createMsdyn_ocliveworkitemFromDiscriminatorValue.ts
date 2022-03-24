import {Msdyn_ocliveworkitem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocliveworkitemFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocliveworkitem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocliveworkitem();
}
