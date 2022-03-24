import {Msdyn_presence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_presenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_presence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_presence();
}
