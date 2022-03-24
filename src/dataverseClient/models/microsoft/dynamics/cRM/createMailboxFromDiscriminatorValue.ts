import {Mailbox} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailboxFromDiscriminatorValue(parseNode: ParseNode | undefined) : Mailbox {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Mailbox();
}
