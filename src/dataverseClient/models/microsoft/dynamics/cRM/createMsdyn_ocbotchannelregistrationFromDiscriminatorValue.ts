import {Msdyn_ocbotchannelregistration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocbotchannelregistrationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocbotchannelregistration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocbotchannelregistration();
}
