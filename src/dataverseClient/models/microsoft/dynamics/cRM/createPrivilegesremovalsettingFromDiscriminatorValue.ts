import {Privilegesremovalsetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrivilegesremovalsettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Privilegesremovalsetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Privilegesremovalsetting();
}
