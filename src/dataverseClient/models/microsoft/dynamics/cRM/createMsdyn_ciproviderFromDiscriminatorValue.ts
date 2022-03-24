import {Msdyn_ciprovider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ciproviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ciprovider {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ciprovider();
}
