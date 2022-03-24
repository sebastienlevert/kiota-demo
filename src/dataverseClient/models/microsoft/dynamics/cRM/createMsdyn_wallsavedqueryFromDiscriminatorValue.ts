import {Msdyn_wallsavedquery} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_wallsavedqueryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_wallsavedquery {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_wallsavedquery();
}
