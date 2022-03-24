import {Msdyn_agreement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_agreementFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_agreement {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_agreement();
}
