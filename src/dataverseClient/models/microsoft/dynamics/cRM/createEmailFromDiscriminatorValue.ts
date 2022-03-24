import {Email} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailFromDiscriminatorValue(parseNode: ParseNode | undefined) : Email {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Email();
}
