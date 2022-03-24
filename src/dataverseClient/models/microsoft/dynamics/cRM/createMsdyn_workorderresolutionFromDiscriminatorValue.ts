import {Msdyn_workorderresolution} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_workorderresolutionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_workorderresolution {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_workorderresolution();
}
