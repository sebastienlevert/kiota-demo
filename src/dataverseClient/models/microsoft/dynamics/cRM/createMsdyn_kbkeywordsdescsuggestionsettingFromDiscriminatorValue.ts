import {Msdyn_kbkeywordsdescsuggestionsetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_kbkeywordsdescsuggestionsettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_kbkeywordsdescsuggestionsetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_kbkeywordsdescsuggestionsetting();
}
