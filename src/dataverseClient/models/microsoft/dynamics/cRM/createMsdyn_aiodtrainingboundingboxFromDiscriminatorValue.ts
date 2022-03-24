import {Msdyn_aiodtrainingboundingbox} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_aiodtrainingboundingboxFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_aiodtrainingboundingbox {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_aiodtrainingboundingbox();
}
