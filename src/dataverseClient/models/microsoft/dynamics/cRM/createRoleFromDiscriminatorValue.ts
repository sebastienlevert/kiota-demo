import {Role} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Role {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Role();
}
