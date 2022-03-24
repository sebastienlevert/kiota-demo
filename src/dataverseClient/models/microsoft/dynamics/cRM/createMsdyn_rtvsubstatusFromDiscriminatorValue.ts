import {Msdyn_rtvsubstatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_rtvsubstatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_rtvsubstatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_rtvsubstatus();
}
