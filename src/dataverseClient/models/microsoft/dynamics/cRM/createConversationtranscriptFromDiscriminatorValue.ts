import {Conversationtranscript} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConversationtranscriptFromDiscriminatorValue(parseNode: ParseNode | undefined) : Conversationtranscript {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Conversationtranscript();
}
