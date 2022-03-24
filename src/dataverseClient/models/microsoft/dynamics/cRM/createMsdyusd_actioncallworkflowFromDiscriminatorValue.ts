import {Msdyusd_actioncallworkflow} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_actioncallworkflowFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_actioncallworkflow {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_actioncallworkflow();
}
