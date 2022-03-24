import {Msdyn_casesuggestion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_casesuggestionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_casesuggestion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_casesuggestion();
}
