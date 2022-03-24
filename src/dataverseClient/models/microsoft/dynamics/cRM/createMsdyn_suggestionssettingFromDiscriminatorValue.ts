import {Msdyn_suggestionssetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_suggestionssettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_suggestionssetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_suggestionssetting();
}
