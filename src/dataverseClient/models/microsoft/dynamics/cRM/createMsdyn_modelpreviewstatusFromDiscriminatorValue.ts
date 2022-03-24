import {Msdyn_modelpreviewstatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_modelpreviewstatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_modelpreviewstatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_modelpreviewstatus();
}
