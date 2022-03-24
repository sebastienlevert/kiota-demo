import {Msdyn_agreementbookingsetup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_agreementbookingsetupFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_agreementbookingsetup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_agreementbookingsetup();
}
