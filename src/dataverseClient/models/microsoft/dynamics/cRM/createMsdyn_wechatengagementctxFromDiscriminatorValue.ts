import {Msdyn_wechatengagementctx} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_wechatengagementctxFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_wechatengagementctx {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_wechatengagementctx();
}
