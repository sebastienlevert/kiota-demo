import {Msdyn_rmasubstatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_rmasubstatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_rmasubstatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_rmasubstatus();
}
