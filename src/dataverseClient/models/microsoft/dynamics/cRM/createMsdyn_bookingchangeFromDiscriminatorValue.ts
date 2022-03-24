import {Msdyn_bookingchange} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_bookingchangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_bookingchange {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_bookingchange();
}
