import {Customcontrol} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomcontrolFromDiscriminatorValue(parseNode: ParseNode | undefined) : Customcontrol {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Customcontrol();
}
