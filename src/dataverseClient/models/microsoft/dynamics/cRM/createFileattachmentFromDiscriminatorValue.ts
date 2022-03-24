import {Fileattachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileattachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Fileattachment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Fileattachment();
}
