import {Msfp_alert} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsfp_alertFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msfp_alert {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msfp_alert();
}
