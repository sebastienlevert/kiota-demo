import {Msfp_unsubscribedrecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsfp_unsubscribedrecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msfp_unsubscribedrecipient {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msfp_unsubscribedrecipient();
}
