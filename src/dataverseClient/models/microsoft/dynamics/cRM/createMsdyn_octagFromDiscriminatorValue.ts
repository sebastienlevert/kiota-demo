import {Msdyn_octag} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_octagFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_octag {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_octag();
}
