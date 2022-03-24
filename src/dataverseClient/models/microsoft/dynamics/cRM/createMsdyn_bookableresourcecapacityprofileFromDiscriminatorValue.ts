import {Msdyn_bookableresourcecapacityprofile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_bookableresourcecapacityprofileFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_bookableresourcecapacityprofile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_bookableresourcecapacityprofile();
}
