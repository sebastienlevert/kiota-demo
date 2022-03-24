import {Msdyn_conversationtopic} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_conversationtopicFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_conversationtopic {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_conversationtopic();
}
