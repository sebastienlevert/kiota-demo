import {Socialprofile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSocialprofileFromDiscriminatorValue(parseNode: ParseNode | undefined) : Socialprofile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Socialprofile();
}
