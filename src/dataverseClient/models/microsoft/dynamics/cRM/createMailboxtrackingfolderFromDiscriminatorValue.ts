import {Mailboxtrackingfolder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailboxtrackingfolderFromDiscriminatorValue(parseNode: ParseNode | undefined) : Mailboxtrackingfolder {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Mailboxtrackingfolder();
}
