import {Msdyn_occarrier} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_occarrierFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_occarrier {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_occarrier();
}
