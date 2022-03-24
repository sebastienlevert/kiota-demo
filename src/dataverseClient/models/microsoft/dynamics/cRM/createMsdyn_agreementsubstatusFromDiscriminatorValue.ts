import {Msdyn_agreementsubstatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_agreementsubstatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_agreementsubstatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_agreementsubstatus();
}
