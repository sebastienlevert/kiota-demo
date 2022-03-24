import {Msdyn_contactsuggestionruleset} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_contactsuggestionrulesetFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_contactsuggestionruleset {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_contactsuggestionruleset();
}
