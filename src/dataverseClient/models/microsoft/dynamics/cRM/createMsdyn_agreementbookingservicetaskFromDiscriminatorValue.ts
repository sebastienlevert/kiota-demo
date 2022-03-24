import {Msdyn_agreementbookingservicetask} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_agreementbookingservicetaskFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_agreementbookingservicetask {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_agreementbookingservicetask();
}
