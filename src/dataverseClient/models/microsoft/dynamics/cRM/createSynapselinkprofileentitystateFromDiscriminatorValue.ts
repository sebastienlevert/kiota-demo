import {Synapselinkprofileentitystate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynapselinkprofileentitystateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Synapselinkprofileentitystate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Synapselinkprofileentitystate();
}
