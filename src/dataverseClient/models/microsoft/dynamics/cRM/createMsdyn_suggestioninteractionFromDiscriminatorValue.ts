import {Msdyn_suggestioninteraction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_suggestioninteractionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_suggestioninteraction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_suggestioninteraction();
}
