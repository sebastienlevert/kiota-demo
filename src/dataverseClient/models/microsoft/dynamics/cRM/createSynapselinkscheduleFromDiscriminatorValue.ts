import {Synapselinkschedule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynapselinkscheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Synapselinkschedule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Synapselinkschedule();
}
