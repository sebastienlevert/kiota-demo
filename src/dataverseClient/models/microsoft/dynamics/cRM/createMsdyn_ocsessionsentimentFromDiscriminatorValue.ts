import {Msdyn_ocsessionsentiment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocsessionsentimentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocsessionsentiment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocsessionsentiment();
}
