import {Msdyusd_agentscriptaction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_agentscriptactionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_agentscriptaction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_agentscriptaction();
}
