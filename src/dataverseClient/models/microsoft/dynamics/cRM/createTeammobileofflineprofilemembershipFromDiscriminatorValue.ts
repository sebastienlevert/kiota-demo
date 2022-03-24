import {Teammobileofflineprofilemembership} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeammobileofflineprofilemembershipFromDiscriminatorValue(parseNode: ParseNode | undefined) : Teammobileofflineprofilemembership {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Teammobileofflineprofilemembership();
}
