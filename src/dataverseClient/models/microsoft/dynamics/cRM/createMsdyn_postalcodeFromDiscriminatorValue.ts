import {Msdyn_postalcode} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_postalcodeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_postalcode {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_postalcode();
}
