import {Msdyn_delegation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_delegationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_delegation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_delegation();
}
