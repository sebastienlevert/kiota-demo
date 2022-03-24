import {Msdyusd_agentscripttaskcategory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_agentscripttaskcategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_agentscripttaskcategory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_agentscripttaskcategory();
}
