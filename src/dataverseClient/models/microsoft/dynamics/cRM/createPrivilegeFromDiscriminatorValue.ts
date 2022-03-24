import {Privilege} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrivilegeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Privilege {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Privilege();
}
