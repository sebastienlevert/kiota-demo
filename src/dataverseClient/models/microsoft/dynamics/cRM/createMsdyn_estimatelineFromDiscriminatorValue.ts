import {Msdyn_estimateline} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_estimatelineFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_estimateline {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_estimateline();
}
