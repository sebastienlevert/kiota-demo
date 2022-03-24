import {Msdyn_casetopicsetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_casetopicsettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_casetopicsetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_casetopicsetting();
}
