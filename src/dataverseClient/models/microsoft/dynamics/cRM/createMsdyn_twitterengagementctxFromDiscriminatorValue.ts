import {Msdyn_twitterengagementctx} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_twitterengagementctxFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_twitterengagementctx {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_twitterengagementctx();
}
