import {MailboxtrackingfolderCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailboxtrackingfolderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MailboxtrackingfolderCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MailboxtrackingfolderCollectionResponse();
}
