import {Msdyn_agentstatushistory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_agentstatushistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_agentstatushistory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_agentstatushistory();
}
