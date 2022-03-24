import {Msdyn_ocfbapplication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocfbapplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocfbapplication {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocfbapplication();
}
