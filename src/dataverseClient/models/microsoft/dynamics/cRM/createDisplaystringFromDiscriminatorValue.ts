import {Displaystring} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDisplaystringFromDiscriminatorValue(parseNode: ParseNode | undefined) : Displaystring {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Displaystring();
}
