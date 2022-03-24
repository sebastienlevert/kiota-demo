import {Msdyn_iotalert} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_iotalertFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_iotalert {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_iotalert();
}
