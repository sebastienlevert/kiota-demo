import {Msdyn_resolution} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_resolutionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_resolution {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_resolution();
}
