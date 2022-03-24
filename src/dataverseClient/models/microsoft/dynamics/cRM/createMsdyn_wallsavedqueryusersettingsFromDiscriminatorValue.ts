import {Msdyn_wallsavedqueryusersettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_wallsavedqueryusersettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_wallsavedqueryusersettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_wallsavedqueryusersettings();
}
