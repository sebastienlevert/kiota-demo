import {Bookingstatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingstatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : Bookingstatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Bookingstatus();
}
