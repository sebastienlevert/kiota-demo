import {Msdyn_channelprovider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_channelproviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_channelprovider {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_channelprovider();
}
