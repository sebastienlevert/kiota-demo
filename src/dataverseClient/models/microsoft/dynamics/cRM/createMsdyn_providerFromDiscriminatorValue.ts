import {Msdyn_provider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_providerFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_provider {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_provider();
}
