import {Msdyn_bookingalertstatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_bookingalertstatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_bookingalertstatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_bookingalertstatus();
}
