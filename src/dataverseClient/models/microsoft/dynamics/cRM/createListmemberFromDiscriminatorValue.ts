import {Listmember} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListmemberFromDiscriminatorValue(parseNode: ParseNode | undefined) : Listmember {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Listmember();
}
