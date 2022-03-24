import {Synapselinkprofile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynapselinkprofileFromDiscriminatorValue(parseNode: ParseNode | undefined) : Synapselinkprofile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Synapselinkprofile();
}
