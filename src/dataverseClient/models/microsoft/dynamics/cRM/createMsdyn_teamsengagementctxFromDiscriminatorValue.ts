import {Msdyn_teamsengagementctx} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_teamsengagementctxFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_teamsengagementctx {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_teamsengagementctx();
}
