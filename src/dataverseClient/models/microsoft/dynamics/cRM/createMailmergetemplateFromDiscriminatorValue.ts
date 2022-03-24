import {Mailmergetemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailmergetemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Mailmergetemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Mailmergetemplate();
}
