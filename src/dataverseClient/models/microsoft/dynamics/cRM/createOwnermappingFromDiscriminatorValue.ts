import {Ownermapping} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOwnermappingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Ownermapping {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Ownermapping();
}
