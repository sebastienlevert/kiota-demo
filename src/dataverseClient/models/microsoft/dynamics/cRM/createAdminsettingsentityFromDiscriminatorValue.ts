import {Adminsettingsentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdminsettingsentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : Adminsettingsentity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Adminsettingsentity();
}
