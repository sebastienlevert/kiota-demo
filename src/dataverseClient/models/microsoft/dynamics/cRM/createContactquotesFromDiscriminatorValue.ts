import {Contactquotes} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContactquotesFromDiscriminatorValue(parseNode: ParseNode | undefined) : Contactquotes {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Contactquotes();
}
