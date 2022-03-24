import {Usermapping} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUsermappingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Usermapping {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Usermapping();
}
