import {Msdyn_salesaccelerationsettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_salesaccelerationsettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_salesaccelerationsettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_salesaccelerationsettings();
}
