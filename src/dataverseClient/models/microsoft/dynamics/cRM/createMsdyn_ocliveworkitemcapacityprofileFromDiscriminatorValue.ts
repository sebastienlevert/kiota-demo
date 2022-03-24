import {Msdyn_ocliveworkitemcapacityprofile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocliveworkitemcapacityprofileFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocliveworkitemcapacityprofile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocliveworkitemcapacityprofile();
}
