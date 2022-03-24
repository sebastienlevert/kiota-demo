import {Msdyn_conversationtopicsetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_conversationtopicsettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_conversationtopicsetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_conversationtopicsetting();
}
