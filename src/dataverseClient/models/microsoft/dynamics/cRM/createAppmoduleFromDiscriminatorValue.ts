import {Appmodule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppmoduleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Appmodule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Appmodule();
}
