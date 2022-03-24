import {Msdyn_liveworkstreamcapacityprofile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_liveworkstreamcapacityprofileFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_liveworkstreamcapacityprofile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_liveworkstreamcapacityprofile();
}
