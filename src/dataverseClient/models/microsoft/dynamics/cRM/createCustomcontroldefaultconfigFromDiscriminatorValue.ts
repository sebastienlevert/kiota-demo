import {Customcontroldefaultconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomcontroldefaultconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Customcontroldefaultconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Customcontroldefaultconfig();
}
