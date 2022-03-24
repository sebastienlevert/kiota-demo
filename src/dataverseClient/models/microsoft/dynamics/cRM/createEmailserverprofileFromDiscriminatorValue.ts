import {Emailserverprofile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailserverprofileFromDiscriminatorValue(parseNode: ParseNode | undefined) : Emailserverprofile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Emailserverprofile();
}
