import {Msdyn_agreementbookingservice} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_agreementbookingserviceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_agreementbookingservice {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_agreementbookingservice();
}
