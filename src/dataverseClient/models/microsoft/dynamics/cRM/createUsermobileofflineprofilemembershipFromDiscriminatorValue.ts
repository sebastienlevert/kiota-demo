import {Usermobileofflineprofilemembership} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUsermobileofflineprofilemembershipFromDiscriminatorValue(parseNode: ParseNode | undefined) : Usermobileofflineprofilemembership {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Usermobileofflineprofilemembership();
}
