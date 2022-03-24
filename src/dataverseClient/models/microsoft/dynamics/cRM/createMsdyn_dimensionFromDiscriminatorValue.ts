import {Msdyn_dimension} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_dimensionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_dimension {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_dimension();
}
