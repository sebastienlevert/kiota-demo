import {Msdyn_quotebookingsetup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_quotebookingsetupFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_quotebookingsetup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_quotebookingsetup();
}
