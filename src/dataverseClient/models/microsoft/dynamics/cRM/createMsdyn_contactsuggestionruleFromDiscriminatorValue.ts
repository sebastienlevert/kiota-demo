import {Msdyn_contactsuggestionrule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_contactsuggestionruleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_contactsuggestionrule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_contactsuggestionrule();
}
