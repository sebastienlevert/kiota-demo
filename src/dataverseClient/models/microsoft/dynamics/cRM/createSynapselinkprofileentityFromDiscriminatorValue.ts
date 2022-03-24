import {Synapselinkprofileentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynapselinkprofileentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : Synapselinkprofileentity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Synapselinkprofileentity();
}
