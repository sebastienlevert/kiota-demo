import {Msdyusd_sessiontransfer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_sessiontransferFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_sessiontransfer {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_sessiontransfer();
}
