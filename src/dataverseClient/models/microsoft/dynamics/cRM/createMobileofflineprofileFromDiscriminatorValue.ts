import {Mobileofflineprofile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileofflineprofileFromDiscriminatorValue(parseNode: ParseNode | undefined) : Mobileofflineprofile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Mobileofflineprofile();
}
