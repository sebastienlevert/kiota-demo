import {Msdyn_ocsession} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocsessionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocsession {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocsession();
}
