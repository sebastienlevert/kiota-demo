import {Msdyn_estimate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_estimateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_estimate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_estimate();
}
