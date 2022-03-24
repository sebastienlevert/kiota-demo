import {Msdyn_bookingalert} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_bookingalertFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_bookingalert {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_bookingalert();
}
