import {Msdyn_personalsoundsetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_personalsoundsettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_personalsoundsetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_personalsoundsetting();
}
