import {Appaction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppactionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Appaction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Appaction();
}
