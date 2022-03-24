import {Customcontrolresource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomcontrolresourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Customcontrolresource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Customcontrolresource();
}
