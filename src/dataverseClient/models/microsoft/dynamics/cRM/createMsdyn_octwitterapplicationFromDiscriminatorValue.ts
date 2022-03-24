import {Msdyn_octwitterapplication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_octwitterapplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_octwitterapplication {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_octwitterapplication();
}
