import {Msdyn_ocsmschannelsetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocsmschannelsettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocsmschannelsetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocsmschannelsetting();
}
