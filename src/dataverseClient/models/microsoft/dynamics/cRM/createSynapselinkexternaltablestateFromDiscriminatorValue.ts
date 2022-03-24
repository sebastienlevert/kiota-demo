import {Synapselinkexternaltablestate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynapselinkexternaltablestateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Synapselinkexternaltablestate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Synapselinkexternaltablestate();
}
