import {Managedidentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedidentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : Managedidentity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Managedidentity();
}
