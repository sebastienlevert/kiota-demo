import {Msdyn_bookingjournal} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_bookingjournalFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_bookingjournal {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_bookingjournal();
}
