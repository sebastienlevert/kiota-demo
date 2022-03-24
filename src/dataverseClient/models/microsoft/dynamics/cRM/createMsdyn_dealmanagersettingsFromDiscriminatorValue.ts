import {Msdyn_dealmanagersettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_dealmanagersettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_dealmanagersettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_dealmanagersettings();
}
