import {Mobileofflineprofileitemassociation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileofflineprofileitemassociationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Mobileofflineprofileitemassociation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Mobileofflineprofileitemassociation();
}
