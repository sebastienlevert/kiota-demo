import {Msdyn_agreementbookingincident} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_agreementbookingincidentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_agreementbookingincident {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_agreementbookingincident();
}
