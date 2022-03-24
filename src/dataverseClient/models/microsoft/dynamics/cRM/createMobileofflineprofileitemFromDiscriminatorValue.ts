import {Mobileofflineprofileitem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileofflineprofileitemFromDiscriminatorValue(parseNode: ParseNode | undefined) : Mobileofflineprofileitem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Mobileofflineprofileitem();
}
