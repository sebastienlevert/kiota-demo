import {Msdyn_casetopic} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_casetopicFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_casetopic {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_casetopic();
}
