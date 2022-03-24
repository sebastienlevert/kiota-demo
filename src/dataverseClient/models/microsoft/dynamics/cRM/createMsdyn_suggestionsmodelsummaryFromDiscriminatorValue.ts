import {Msdyn_suggestionsmodelsummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_suggestionsmodelsummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_suggestionsmodelsummary {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_suggestionsmodelsummary();
}
