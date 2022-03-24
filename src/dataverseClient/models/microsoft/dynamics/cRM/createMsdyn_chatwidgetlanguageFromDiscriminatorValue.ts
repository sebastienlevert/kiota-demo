import {Msdyn_chatwidgetlanguage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_chatwidgetlanguageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_chatwidgetlanguage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_chatwidgetlanguage();
}
