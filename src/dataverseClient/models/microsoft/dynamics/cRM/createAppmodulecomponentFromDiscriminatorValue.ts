import {Appmodulecomponent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppmodulecomponentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Appmodulecomponent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Appmodulecomponent();
}
