import {Personaldocumenttemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonaldocumenttemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Personaldocumenttemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Personaldocumenttemplate();
}
