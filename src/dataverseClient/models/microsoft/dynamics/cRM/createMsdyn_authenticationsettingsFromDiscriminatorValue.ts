import {Msdyn_authenticationsettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_authenticationsettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_authenticationsettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_authenticationsettings();
}
