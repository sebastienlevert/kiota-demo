import {Msdyn_agreementbookingdate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_agreementbookingdateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_agreementbookingdate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_agreementbookingdate();
}
