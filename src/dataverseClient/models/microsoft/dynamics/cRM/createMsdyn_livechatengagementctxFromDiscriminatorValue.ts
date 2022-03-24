import {Msdyn_livechatengagementctx} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_livechatengagementctxFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_livechatengagementctx {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_livechatengagementctx();
}
